import React from 'react';
import FavoriteIcon from '../../../assets/icons/favorite-icon.svg';

const FavoriteCompaniesList: React.FC = ({ children }) => {
  return (
    <>
      <div
        style={{ display: 'flex', alignItems: 'center', paddingTop: '24px' }}
      >
        <FavoriteIcon style={{ marginLeft: '20px', fill: '#0047bb' }} />
        <h3 style={{ paddingLeft: '16px' }}>Empresas favoritas</h3>
      </div>
      <ul style={{ paddingLeft: '20px', margin: '0' }}>{children}</ul>
    </>
  );
};

export default FavoriteCompaniesList;
