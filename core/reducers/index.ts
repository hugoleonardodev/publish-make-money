import intradayAppl from '../../common/constants/INTRADAY_APPL';
import quoteAPPL from '../../common/constants/QUOTE_APPL';
import { Action, StocksReducer } from '../actions';
import { CompanyQuote, IntradayPrice } from '../hooks/types';

export interface InitialState {
  currentPrice: CompanyQuote;
  lastPrice: CompanyQuote;
  intradayPrice: IntradayPrice[];
}

export const initialState = {
  currentPrice: quoteAPPL as CompanyQuote,
  lastPrice: quoteAPPL as CompanyQuote,
  intradayPrice: intradayAppl as IntradayPrice[],
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
