import { StorageObject } from './setLocalStorage';

const deleteFavoriteCompany = (
  store: StorageObject,
  companySymbol: string
): void => {
  const filterFavorite = store.favoriteCompanies.filter(
    (company) => company.symbol === companySymbol
  );
  const indexOfFavorite = store.favoriteCompanies.indexOf(filterFavorite[0]);
  const newFavoriteCompanies = [
    ...store.favoriteCompanies.slice(0, indexOfFavorite),
    ...store.favoriteCompanies.slice(indexOfFavorite + 1),
  ];
  const newStorageObject = {
    ...store,
    favoriteCompanies: newFavoriteCompanies,
  };
  return localStorage.setItem('monetusMoney', JSON.stringify(newStorageObject));
};

export default deleteFavoriteCompany;
