/**
 * Actions types for Stocks Reducer.
 * @UPDATE_REAL_TIME_QUOTES updates the last quote of a company every five seconds.
 * @UPDATE_INTRADAY_PRICES updates intraday prices every minute.
 */

export enum StocksReducer {
  UPDATE_REAL_TIME_QUOTES = '@stocks/UPDATE_REAL_TIME_QUOTES',
  UPDATE_INTRADAY_PRICES = '@stocks/UPDATE_INTRADAY_PRICES',
}

/**
 * Action for complexes updates.
 * @payload data from IEX API.
 * @type type of action from Stocks Reducer.
 */

export interface Action {
  payload: any;
  type: string;
  [key: string]: any;
}
