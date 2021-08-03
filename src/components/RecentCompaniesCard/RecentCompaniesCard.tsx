import React from 'react';
import CompanyName from '../CompanyName';
import CompanyRating from '../CompanyRating/CompanyRating';
import FavoriteButton from '../FavoriteButton';
import { useStocks } from '../../../core/hooks/useStocks';

import useStyles from '../../../styles/hooks/useStyles';

interface RecentCompaniesCardProps {
  companyLogo: JSX.Element;
  companyName: string;
  companySymbol: string;
  companyRating: number;
}

const RecentCompaniesCard: React.FC<RecentCompaniesCardProps> = ({
  companyLogo,
  companyName,
  companySymbol,
  companyRating,
}) => {
  const { handleSearch } = useStocks();
  const styles = useStyles();
  return (
    <div
      className={styles.recentCard}
      onClick={() => handleSearch(companySymbol)}
    >
      <div
        style={{ display: 'flex', alignItems: 'center', padding: '16px 8px' }}
      >
        <FavoriteButton hasValue={companySymbol} />
        {companyLogo}
        <CompanyName companyName={companyName} companySymbol={companySymbol} />
      </div>
      <CompanyRating companyRating={companyRating} />
    </div>
  );
};

export default RecentCompaniesCard;
