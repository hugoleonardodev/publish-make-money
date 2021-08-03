import React from 'react';
import getLocalStorage from '../../../services/store/getLocalStorage';
import FavoriteCompaniesCard from '../../components/FavoriteCompaniesCard/FavoriteCompaniesCard';
import UserOptionsDropdown from '../../components/UserOptionsDropdown/UserOptionsDropdown';
import FavoriteCompaniesList from '../../containers/FavoriteCompaniesList/FavoriteCompaniesList';
import MonetusIcon from '../../../assets/logos/monetus-logo.svg';
import LoadingChart from '../../components/LoadingChart/LoadingChart';

import TrashIcon from '../../../assets/icons/trash-icon.svg';
import { StorageObject } from '../../../services/store/setLocalStorage';
import { useStocks } from '../../../core/hooks/useStocks';

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
                  companyLogo={<MonetusIcon style={{ margin: '16px 16px' }} />}
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
