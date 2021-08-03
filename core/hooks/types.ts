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
