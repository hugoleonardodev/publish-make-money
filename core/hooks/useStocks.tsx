import React from 'react';
import {
  // getCompanyInfoBySymbol,
  getCompanyQuoteBySymbol,
} from '../../services/api';

import { Action } from '../actions';

import { initialState, stocksReducer } from '../reducers/index';

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
  primaryExchange: string;
  calculationPrice: string;
  open: null | number;
  openTime: null | string;
  openSource: string;
  close: null | number;
  closeTime: null;
  closeSource: string;
  high: null | number;
  highTime: number;
  highSource: string;
  low: null | number;
  lowTime: null | string;
  lowSource: null | number;
  latestPrice: number;
  latestSource: string;
  latestTime: string;
  latestUpdate: number;
  latestVolume: null | number;
  iexRealtimePrice: number;
  iexRealtimeSize: number;
  iexLastUpdated: number;
  delayedPrice: null | number;
  delayedPriceTime: null | string;
  oddLotDelayedPrice: null | number;
  oddLotDelayedPriceTime: null | string;
  extendedPrice: null | number;
  extendedChange: null | number;
  extendedChangePercent: null | number;
  extendedPriceTime: null | string;
  previousClose: number;
  previousVolume: number;
  change: number;
  changePercent: number;
  volume: null | number;
  iexMarketPercent: number;
  iexVolume: number;
  avgTotalVolume: number;
  iexBidPrice: number;
  iexBidSize: number;
  iexAskPrice: number;
  iexAskSize: number;
  iexOpen: number;
  iexOpenTime: number;
  iexClose: number;
  iexCloseTime: number;
  marketCap: number;
  peRatio: number;
  week52High: number;
  week52Low: number;
  ytdChange: number;
  lastTradeTime: number;
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
}

export const StocksContext = React.createContext<StocksContextData>(
  {} as StocksContextData
);

export const StocksProvider: React.FC = ({ children }) => {
  const [stock, setStock] = React.useReducer(stocksReducer, initialState);

  const [error, setError] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async function () {
      const resultQuote = await getCompanyQuoteBySymbol('AAPL');
      // console.log(resultQuote);
      if (resultQuote.symbol === 'AAPL') {
        setStock({
          type: '@stocks/UPDATE_REAL_TIME_QUOTES',
          payload: resultQuote,
        });
      }
    })();
  }, []);

  return (
    <StocksContext.Provider
      value={{
        stock,
        setStock,
        error,
        setError,
        isLoading,
        setIsLoading,
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
