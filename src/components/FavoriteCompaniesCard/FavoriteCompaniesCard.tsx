import React from 'react';
import CompanyName from '../CompanyName';
import CompanyRating from '../CompanyRating/CompanyRating';

interface FavoriteCompaniesCard {
  companyLogo: JSX.Element;
  companyName: string;
  companySymbol: string;
  companyRating: number;
}

const FavoriteCompaniesCard: React.FC<FavoriteCompaniesCard> = ({
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
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {companyLogo}
        <CompanyName companyName={companyName} companySymbol={companySymbol} />
      </div>
      <CompanyRating companyRating={companyRating} />
      {/* <button>Remove</button> */}
    </div>
  );
};

export default FavoriteCompaniesCard;
