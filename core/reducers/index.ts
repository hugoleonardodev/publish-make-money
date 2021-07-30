import { Action, StocksReducer } from '../actions';
import { CompanyQuote, IntradayPrice } from '../hooks/useStocks';

export const initialState = {
  currentPrice: {} as CompanyQuote,
  lastPrice: {} as CompanyQuote,
  intradayPrice: [] as IntradayPrice[],
};

export const stocksReducer = (state = initialState, action: Action): any => {
  switch (action.type) {
    case StocksReducer.UPDATE_REAL_TIME_QUOTES:
      return {
        ...state,
        lastPrice: state.currentPrice,
        currentPrice: action.payload,
      };
    case StocksReducer.UPDATE_INTRADAY_PRICES:
      return {
        ...state,
        intradayPrice: action.payload,
      };
    default:
      return state;
  }
};
