import React from 'react';
import CompanyName from '../CompanyName';
import CompanyRating from '../CompanyRating/CompanyRating';
import FavoriteButton from '../FavoriteButton';

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
  return (
    <div
      style={{
        display: 'flex',
        width: '352px',
        justifyContent: 'space-between',
        boxShadow: '0px 8px 20px -2px rgb(43 37 63 / 10%)',
        borderRadius: '8px',
        marginTop: '20px',
        alignItems: 'center',
        background: '#fafafa',
      }}
    >
      <div
        style={{ display: 'flex', alignItems: 'center', padding: '16px 8px' }}
      >
        <FavoriteButton />
        {companyLogo}
        <CompanyName companyName={companyName} companySymbol={companySymbol} />
      </div>
      <CompanyRating companyRating={companyRating} />
      {/* <button>Remove</button> */}
    </div>
  );
};

export default RecentCompaniesCard;
