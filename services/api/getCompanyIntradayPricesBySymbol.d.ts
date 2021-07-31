import getCompanyIntradayPricesBySymbol from './getCompanyIntradayPricesBySymbol';

declare module './getCompanyIntradayPricesBySymbol' {
  export type GetCopmpanyInfoBySymbolTypes =
    typeof getCompanyIntradayPricesBySymbol;
}
