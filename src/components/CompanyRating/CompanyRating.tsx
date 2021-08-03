import React from 'react';

import HighIcon from '../../../assets/icons/high-icon.svg';
import LowIcon from '../../../assets/icons/low-icon.svg';

import { ERROR, SUCCESS } from '../../../common/constants/THEME';

interface CompanyRatingProps {
  companyRating: number;
}

const CompanyRating: React.FC<CompanyRatingProps> = ({ companyRating }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', paddingRight: '8px' }}>
      <h5 style={{ color: companyRating > 0 ? SUCCESS : ERROR }}>
        {companyRating > 0 && <>+</>}
        {`${companyRating.toFixed(3)}%`}
      </h5>
      {companyRating > 0 ? (
        <HighIcon style={{ marginLeft: '4px' }} />
      ) : (
        <LowIcon style={{ marginLeft: '4px' }} />
      )}
    </div>
  );
};

export default CompanyRating;
