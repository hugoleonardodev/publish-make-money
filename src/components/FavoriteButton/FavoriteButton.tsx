import React from 'react';
import IsFavorite from '../../../assets/icons/is-favorite-icon.svg';
import Favorite from '../../../assets/icons/favorite-icon.svg';
import ToolTip from '@material-ui/core/Tooltip';
import useStyles from '../../../styles/hooks/useStyles';

interface FavoriteButtonProps {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  hasValue?: string | number | readonly string[];
  isFavorite?: boolean;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  handleClick,
  hasValue,
  isFavorite,
}) => {
  const styles = useStyles();
  return (
    <ToolTip
      title="Adicionar aos favoritos"
      aria-label="add-to-favorite"
      placement="top"
      arrow
      className={styles.toolTip}
    >
      <button
        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        onClick={handleClick}
        value={hasValue}
      >
        {isFavorite ? <IsFavorite /> : <Favorite />}
      </button>
    </ToolTip>
  );
};

export default FavoriteButton;
