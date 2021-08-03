import React from 'react';
import ToolTip from '@material-ui/core/Tooltip';

import IsFavorite from '../../../assets/icons/is-favorite-icon.svg';
import Favorite from '../../../assets/icons/favorite-icon.svg';

import { useStocks } from '../../../core/hooks/useStocks';
import getLocalStorage from '../../../services/store/getLocalStorage';
import useStyles from '../../../styles/hooks/useStyles';

interface FavoriteButtonProps {
  hasValue: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ hasValue }) => {
  const {
    handleFavorite,
    refreshFavorites,
    setRefreshFavorites,
    removeFavorite,
    refreshRecents,
    setRefreshRecents,
  } = useStocks();

  const styles = useStyles();
  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(() => {
    const store = getLocalStorage();
    const filterCompanies = store.favoriteCompanies.filter(
      (company) => company.symbol === hasValue
    );
    if (filterCompanies.length > 0) {
      return setIsFavorite(true);
    }
    return setIsFavorite(false);
  }, [
    hasValue,
    refreshFavorites,
    setRefreshFavorites,
    removeFavorite,
    refreshRecents,
    setRefreshRecents,
  ]);

  return (
    <>
      {isFavorite ? (
        <button
          style={{
            background: 'transparent',
            border: 'none',
            cursor: isFavorite ? 'auto' : 'pointer',
          }}
          onClick={() => handleFavorite(hasValue)}
          disabled={isFavorite}
        >
          {isFavorite ? <IsFavorite /> : <Favorite />}
        </button>
      ) : (
        <ToolTip
          title="Adicionar aos favoritos"
          aria-label="add-to-favorite"
          placement="top"
          arrow
          className={styles.toolTip}
          disableHoverListener={isFavorite}
        >
          <button
            style={{
              background: 'transparent',
              border: 'none',
              cursor: isFavorite ? 'auto' : 'pointer',
            }}
            onClick={() => handleFavorite(hasValue)}
            disabled={isFavorite}
          >
            {isFavorite ? <IsFavorite /> : <Favorite />}
          </button>
        </ToolTip>
      )}
    </>
  );
};

export default FavoriteButton;
