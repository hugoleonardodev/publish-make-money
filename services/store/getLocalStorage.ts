import STORAGE_OBJECT from '../../common/constants/STORAGE_OBJECT';
import { StorageObject } from './setLocalStorage';

// interface StorageCompanies {
//   name: string;
//   symbol: string;
//   rating: number;
// }
// export interface StorageObject {
//   recentCompanies: StorageCompanies[];
//   favoriteCompanies: StorageCompanies[];
//   userName: string;
//   publishableToken: string;
// }

const getLocalStorage = (): StorageObject => {
  const storage = localStorage.getItem('makeMoney');

  if (!storage) {
    localStorage.setItem('makeMoney', JSON.stringify(STORAGE_OBJECT));
  }

  const storageBefore = localStorage.getItem('makeMoney');
  let result;
  if (storageBefore) {
    result = JSON.parse(storageBefore);
  }

  return result;
};

export default getLocalStorage;
