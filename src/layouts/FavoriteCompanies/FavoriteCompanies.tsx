import React from 'react';
import { useStocks } from '../../../core/hooks/useStocks';
import FavoriteCompaniesCard from '../../components/FavoriteCompaniesCard/FavoriteCompaniesCard';
import UserOptionsDropdown from '../../components/UserOptionsDropdown/UserOptionsDropdown';
import LoadingChart from '../../components/LoadingChart/LoadingChart';
import FavoriteCompaniesList from '../../containers/FavoriteCompaniesList/FavoriteCompaniesList';

import TrashIcon from '../../../assets/icons/trash-icon.svg';
import MainIcon from '../../../assets/icons/main-icon.svg';

import getLocalStorage from '../../../services/store/getLocalStorage';
import { StorageObject } from '../../../services/store/setLocalStorage';

const FavoriteCompanies: React.FC = () => {
  const {
    refreshRecents,
    setRefreshRecents,
    refreshFavorites,
    setRefreshFavorites,
    removeFavorite,
  } = useStocks();
  const [storage, setStorage] = React.useState({} as StorageObject);

  React.useEffect(() => {
    const store = getLocalStorage();
    setStorage(store);
    setRefreshFavorites(false);
  }, [refreshFavorites, setRefreshFavorites]);

  React.useEffect(() => {
    const store = getLocalStorage();
    setStorage(store);
    setRefreshRecents(false);
  }, [refreshRecents, setRefreshRecents]);

  return (
    <div style={{ width: '392px', backgroundColor: '#fafafa' }}>
      {!storage.favoriteCompanies ? (
        <LoadingChart />
      ) : (
        <div style={{ marginTop: '36px' }}>
          <UserOptionsDropdown userName={storage.userName} />
          <FavoriteCompaniesList>
            {storage.favoriteCompanies.map((company) => (
              <li
                key={company.name}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <FavoriteCompaniesCard
                  companyLogo={<MainIcon style={{ margin: '16px 16px' }} />}
                  companyName={company.name}
                  companySymbol={company.symbol}
                  companyRating={company.rating}
                />
                <button
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    marginTop: '16px',
                  }}
                  onClick={() => removeFavorite(company.symbol)}
                >
                  <TrashIcon />
                </button>
              </li>
            ))}
          </FavoriteCompaniesList>
        </div>
      )}
    </div>
  );
};

export default FavoriteCompanies;
