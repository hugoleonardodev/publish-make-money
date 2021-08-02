import STORAGE_OBJECT from '../../common/constants/STORAGE_OBJECT';

export interface StorageCompanies {
  name: string;
  symbol: string;
  rating: number;
}
export interface StorageObject {
  recentCompanies: StorageCompanies[];
  favoriteCompanies: StorageCompanies[];
  userName: string;
  publishableToken: string;
}

const setLocalStorage = (): StorageObject | void => {
  const storage = localStorage.getItem('monetusMoney');

  if (!storage) {
    return localStorage.setItem('monetusMoney', JSON.stringify(STORAGE_OBJECT));
  }

  const result = JSON.parse(storage);

  return result;
};

export default setLocalStorage;
