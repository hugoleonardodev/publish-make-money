import STORAGE_OBJECT from '../../common/constants/STORAGE_OBJECT';

interface StorageCompanies {
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

const getLocalStorage = (): StorageObject => {
  const storage = localStorage.getItem('monetusMoney');

  if (!storage) {
    localStorage.setItem('monetusMoney', JSON.stringify(STORAGE_OBJECT));
  }

  const storageBefore = localStorage.getItem('monetusMoney');
  let result;
  if (storageBefore) {
    result = JSON.parse(storageBefore);
  }

  return result;
};

export default getLocalStorage;
