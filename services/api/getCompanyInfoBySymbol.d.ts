import getCompanyInfoBySymbol from './getCompanyInfoBySymbol';

declare module './getCompanyInfoBySymbol' {
  export type GetCopmpanyInfoBySymbolTypes = typeof getCompanyInfoBySymbol;
}
