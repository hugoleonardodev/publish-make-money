import React from 'react';

import { getCompanyQuoteBySymbol } from '../../services/api';

import getLocalStorage from '../../services/store/getLocalStorage';

import { Action } from '../actions';

import { initialState, stocksReducer } from '../reducers/index';

import { BASE_URL } from '../../common/constants';
import TOKEN_PUBLISHABLE from '../../common/constants/TOKEN_PUBLISHABLE';
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
  open: number | null;
  openTime: number | null;
  openSource: string | null;
  close: number | null;
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
  change: number | null;
  changePercent: number | null;
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
}

export const StocksContext = React.createContext<StocksContextData>(
  {} as StocksContextData
);

export const StocksProvider: React.FC = ({ children }) => {
  const [stock, setStock] = React.useReducer(stocksReducer, initialState);

  const [isLoading, setIsLoading] = React.useState(false);

  const [error, setError] = React.useState(false);

  const [symbol, setSymbol] = React.useState('MSFT');

  const [isMarketOpen, setIsMarketOpen] = React.useState(false);

  const [refreshStock, setRefreshStock] = React.useState(false);

  // const handleIsMarketOpen = useCallback(() => {
  //   if (stock.currentPrice.isMarketOpen) {
  //     setIsMarketOpen(true);
  //   }
  //   setIsMarketOpen(false);
  // }, []);

  const handleInputSymbol = React.useCallback(
    (event) => {
      setSymbol(event.target.value);
    },
    [setSymbol]
  );

  const handleRequest = (
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
  };

  const handleSearch = React.useCallback(
    async (searchSymbol = 'MSFT') => {
      setIsLoading(true);

      const companyQuote = await getCompanyQuoteBySymbol(searchSymbol);

      handleRequest(searchSymbol, setStock, companyQuote);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    },
    [setStock, setIsLoading]
  );

  React.useEffect(() => {
    (async function () {
      setIsLoading(true);
      const store = getLocalStorage();
      const lastFavorite =
        store.favoriteCompanies[store.favoriteCompanies.length - 1];
      const resultQuote = await getCompanyQuoteBySymbol(lastFavorite.symbol);
      if (resultQuote.isUSMarketOpen) {
        setIsMarketOpen(true);
        handleRequest(lastFavorite.symbol, setStock, resultQuote);
      }

      handleRequest(lastFavorite.symbol, setStock, resultQuote);

      setIsLoading(false);
    })();
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Refresh Charts every minute if isMarketOpen');
    const oneMinuteTimer = setTimeout(async () => {
      const store = getLocalStorage();

      const lastFavorite =
        store.favoriteCompanies[store.favoriteCompanies.length - 1];

      const resultQuote = await getCompanyQuoteBySymbol(lastFavorite.symbol);

      if (resultQuote.isUSMarketOpen) {
        setIsMarketOpen(true);
        handleRequest(lastFavorite.name, setStock, resultQuote);
      }
      handleRequest(lastFavorite.name, setStock, resultQuote);
    }, 5000);

    return () => clearTimeout(oneMinuteTimer);
  }, [setIsMarketOpen]);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Refresh Indicator High/Low every 5 seconds if isMarketOpen');
    const fiveSecondsTimer = setTimeout(async () => {
      if (isMarketOpen) {
        const store = getLocalStorage();
        const lastFavorite =
          store.favoriteCompanies[store.favoriteCompanies.length - 1];
        const companyQuote = await getCompanyQuoteBySymbol(lastFavorite.symbol);
        setStock({
          type: '@stocks/UPDATE_REAL_TIME_QUOTES',
          payload: companyQuote,
        });
        setRefreshStock(true);
      }
    }, 5000);

    return () => clearTimeout(fiveSecondsTimer);
  }, [isMarketOpen, setRefreshStock]);

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
