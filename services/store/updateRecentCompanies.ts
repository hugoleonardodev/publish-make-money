// import { CompanyQuote } from '../../core/hooks/useStocks';
import { CompanyQuote } from '../../core/hooks/types';
import getLocalStorage from './getLocalStorage';

const updateRecentCompanies = (
  isLoading: boolean,
  recentSearch: CompanyQuote,
  symbol: string
): boolean | void => {
  const store = getLocalStorage();
  // console.log(store);
  // console.log(isLoading, recentSearch, symbol);
  // if (isLoading) {
  // console.log(store.recentCompanies);
  const isRecent = store.recentCompanies.filter(
    (company) => company.symbol === symbol
  );
  // console.log(isRecent);
  if (isRecent.length === 0) {
    const newRecentCompany = {
      name: recentSearch.companyName,
      symbol: recentSearch.symbol,
      rating: recentSearch.changePercent,
    };
    const newRecentCompaniesArray = [
      newRecentCompany,
      ...store.recentCompanies,
    ];
    const newStorageObject = {
      ...store,
      recentCompanies: newRecentCompaniesArray,
    };
    localStorage.setItem('monetusMoney', JSON.stringify(newStorageObject));
    return false;
  }
  return true;
  // }
  // return false;
};

export default updateRecentCompanies;
