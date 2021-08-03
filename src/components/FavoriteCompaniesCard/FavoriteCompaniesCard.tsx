import React from 'react';
import CompanyName from '../CompanyName';
import CompanyRating from '../CompanyRating/CompanyRating';
import { useStocks } from '../../../core/hooks/useStocks';

import useStyles from '../../../styles/hooks/useStyles';

interface FavoriteCompaniesCardProps {
  companyLogo: JSX.Element;
  companyName: string;
  companySymbol: string;
  companyRating: number;
}

const FavoriteCompaniesCard: React.FC<FavoriteCompaniesCardProps> = ({
  companyLogo,
  companyName,
  companySymbol,
  companyRating,
}) => {
  const { handleSearch } = useStocks();
  const styles = useStyles();
  return (
    <div
      className={styles.favoriteCard}
      onClick={() => handleSearch(companySymbol)}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {companyLogo}
        <CompanyName companyName={companyName} companySymbol={companySymbol} />
      </div>
      <CompanyRating companyRating={companyRating} />
    </div>
  );
};

export default FavoriteCompaniesCard;
