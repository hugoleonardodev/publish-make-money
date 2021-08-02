import React from 'react';

import { getCompanyQuoteBySymbol } from '../../services/api';

import getLocalStorage from '../../services/store/getLocalStorage';

import { Action } from '../actions';

import { InitialState, initialState, stocksReducer } from '../reducers/index';

import { BASE_URL } from '../../common/constants';
import TOKEN_PUBLISHABLE from '../../common/constants/TOKEN_PUBLISHABLE';
import updateRecentCompanies from '../../services/store/updateRecentCompanies';
import { StorageObject } from '../../services/store/setLocalStorage';
/**
 * Intraday Price for a company symbol updated every minute.
 * @date : 'yyyy-mm-dd'.
 * @minute : 'hh:mm'.
 * @label : 'h:mm AM/PM'.
 * @close : price quoted at the moment of the close minute.
 */

export interface IntradayPrice {
  date: string;
  minute: string;
  label: string;
  high: number;
  low: number;
  open: number;
  close: number;
  average: number;
  volume: number;
  notional: number;
  numberOfTrades: number;
}

/**
 * Intraday Price for a company symbol updated every minute.
 * @symbol : company Nasdaq symbol for notes.
 * @companyName : Nasdaq company name.
 * @latestPrice : price quoted at the current moment.
 * @isUSMarketOpen : true if US Market is open. false if it is closed.
 */

export interface CompanyQuote {
  symbol: string;
  companyName: string;
  primaryExchange: string | null;
  calculationPrice: string | null;
  open: number;
  openTime: number | null;
  openSource: string | null;
  close: number;
  closeTime: number | null;
  closeSource: string | null;
  high: number | null;
  highTime: number | null;
  highSource: string | null;
  low: number | null;
  lowTime: number | null;
  lowSource: string | null;
  latestPrice: number;
  latestSource: string | null;
  latestTime: string | null;
  latestUpdate: number | null;
  latestVolume: number | null;
  iexRealtimePrice: number | null;
  iexRealtimeSize: number | null;
  iexLastUpdated: number | null;
  delayedPrice: number | null;
  delayedPriceTime: number | null;
  oddLotDelayedPrice: number | null;
  oddLotDelayedPriceTime: number | null;
  extendedPrice: number | null;
  extendedChange: number | null;
  extendedChangePercent: number | null;
  extendedPriceTime: number | null;
  previousClose: number | null;
  previousVolume: number | null;
  change: number;
  changePercent: number;
  volume: number | null;
  iexMarketPercent: number | null;
  iexVolume: number | null;
  avgTotalVolume: number | null;
  iexBidPrice: number | null;
  iexBidSize: number | null;
  iexAskPrice: number | null;
  iexAskSize: number | null;
  iexOpen: number | null;
  iexOpenTime: number | null;
  iexClose: number | null;
  iexCloseTime: number | null;
  marketCap: number | null;
  peRatio: number | null;
  week52High: number | null;
  week52Low: number | null;
  ytdChange: number | null;
  lastTradeTime: number | null;
  currency: 'USD';
  isUSMarketOpen: boolean;
}

export interface StocksProvider {
  currentPrice: CompanyQuote;
  lastPrice: CompanyQuote;
  intradayPrice: IntradayPrice[];
}

export interface StocksContextData {
  stock: StocksProvider;
  setStock: React.Dispatch<Action>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  symbol: string;
  handleInputSymbol: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  handleSearch: (searchSymbol: any) => Promise<void>;
  refreshStock: boolean;
  refreshRecents: boolean;
  setRefreshRecents: React.Dispatch<React.SetStateAction<boolean>>;
  storage: StorageObject;
}

export const StocksContext = React.createContext<StocksContextData>(
  {} as StocksContextData
);

export const StocksProvider: React.FC = ({ children }) => {
  const [stock, setStock] = React.useReducer(
    stocksReducer,
    initialState as InitialState
  );

  const [isLoading, setIsLoading] = React.useState(false);

  const [error, setError] = React.useState(false);

  const [symbol, setSymbol] = React.useState('MSFT');

  const [isMarketOpen, setIsMarketOpen] = React.useState(false);

  const [refreshStock, setRefreshStock] = React.useState(false);

  const [refreshRecents, setRefreshRecents] = React.useState(false);
  const [storage, setStorage] = React.useState({} as StorageObject);
  const [refreshChart, setRefreshChart] = React.useState(false);

  // console.log(stock);
  React.useEffect(() => {
    const store = getLocalStorage();
    // console.log(store);
    setStorage(store);
  }, []);
  // React.useEffect(() => {
  //   if (refreshRecents) {
  //     const store = getLocalStorage();
  //     // console.log(store);
  //     setRefreshRecents(false);
  //     return setStorage(store);
  //   }
  //   return setRefreshRecents(false);
  // }, [refreshRecents, setRefreshRecents]);

  const handleInputSymbol = React.useCallback(
    (event) => {
      setSymbol(event.target.value.toUpperCase());
    },
    [setSymbol]
  );

  const handleRequest = React.useCallback(
    (
      searchSymbol: string,
      setStock: React.Dispatch<Action>,
      companyQuote: CompanyQuote
    ) => {
      const Http = new XMLHttpRequest();
      const url = `${BASE_URL}${searchSymbol}/intraday-prices/${TOKEN_PUBLISHABLE}`;
      Http.open('GET', url);
      Http.send();
      Http.onreadystatechange = (_e) => {
        const intradayPrices = JSON.parse(Http.responseText);
        setStock({
          type: '@stocks/UPDATE_INTRADAY_PRICES',
          payload: intradayPrices as IntradayPrice[],
        });
        setStock({
          type: '@stocks/UPDATE_REAL_TIME_QUOTES',
          payload: companyQuote,
        });
      };
    },
    []
  );

  const handleRecent = React.useCallback(
    (searchSymbol: string, companyQuote: CompanyQuote) => {
      const isRecent = updateRecentCompanies(
        isLoading,
        companyQuote,
        searchSymbol
      );
      if (!isRecent) {
        const store = getLocalStorage();
        // console.log(store);
        setStorage(store);
        setRefreshRecents(true);
        // eslint-disable-next-line no-console
        return console.log('Recent Array Updated');
      }
      // eslint-disable-next-line no-console
      return console.log(`Already Visited ${searchSymbol}`);
    },
    [isLoading]
  );

  const handleSearch = React.useCallback(
    async (searchSymbol = 'MSFT') => {
      setIsLoading(true);

      // handleRecent(searchSymbol);
      // console.log(searchSymbol);
      const companyQuote = await getCompanyQuoteBySymbol(searchSymbol);
      // console.log(companyQuote.symbol);
      handleRequest(searchSymbol, setStock, companyQuote);

      setTimeout(() => {
        handleRecent(searchSymbol, companyQuote);
        setIsLoading(false);
      }, 1000);
    },
    [handleRecent, handleRequest]
  );

  React.useEffect(() => {
    (async function () {
      setIsLoading(true);
      // const store = getLocalStorage();
      // const lastFavorite =
      //   store.favoriteCompanies[store.favoriteCompanies.length - 1];
      const resultQuote = await getCompanyQuoteBySymbol(symbol);
      if (resultQuote.isUSMarketOpen) {
        setIsMarketOpen(true);
        handleRequest(symbol, setStock, resultQuote);
      }

      // handleRequest(lastFavorite.symbol, setStock, resultQuote);

      setIsLoading(false);
    })();
  }, [handleRequest, symbol]);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Refresh Charts every minute if isMarketOpen');
    setRefreshChart(true);
    const oneMinuteTimer = setTimeout(async () => {
      // const store = getLocalStorage();

      // const lastFavorite =
      //   store.favoriteCompanies[store.favoriteCompanies.length - 1];

      const resultQuote = await getCompanyQuoteBySymbol(symbol);

      if (resultQuote.isUSMarketOpen) {
        handleRequest(symbol, setStock, resultQuote);
        setIsMarketOpen(true);
        setRefreshChart(false);
      }
      // handleRequest(lastFavorite.name, setStock, resultQuote);
    }, 60000);

    return () => clearTimeout(oneMinuteTimer);
  }, [handleRequest, setIsMarketOpen, symbol, setRefreshChart, refreshChart]);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Refresh Indicator High/Low every 5 seconds if isMarketOpen');
    setRefreshStock(false);
    const fiveSecondsTimer = setTimeout(async () => {
      // const store = getLocalStorage();
      // const lastFavorite =
      //   store.favoriteCompanies[store.favoriteCompanies.length - 1];
      const companyQuote = await getCompanyQuoteBySymbol(symbol);
      // console.log(companyQuote);
      if (isMarketOpen && !refreshStock) {
        setStock({
          type: '@stocks/UPDATE_REAL_TIME_QUOTES',
          payload: companyQuote,
        });
        setRefreshStock(true);
      }
    }, 5000);

    return () => clearTimeout(fiveSecondsTimer);
  }, [isMarketOpen, setRefreshStock, refreshStock, symbol]);

  return (
    <StocksContext.Provider
      value={{
        stock,
        setStock,
        error,
        setError,
        isLoading,
        setIsLoading,
        symbol,
        handleInputSymbol,
        handleSearch,
        refreshStock,
        refreshRecents,
        setRefreshRecents,
        storage,
      }}
    >
      {children}
    </StocksContext.Provider>
  );
};

export const useStocks = (): StocksContextData => {
  const context = React.useContext(StocksContext);

  if (!context) {
    throw new Error('useStocks must be used within an StocksProvider');
  }

  return context;
};
