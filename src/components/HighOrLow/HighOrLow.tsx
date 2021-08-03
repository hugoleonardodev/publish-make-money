import React from 'react';
import High from '../../../assets/icons/high-icon.svg';
import Low from '../../../assets/icons/low-icon.svg';

import { ERROR, SUCCESS } from '../../../common/constants/THEME';

interface HighOrLowProps {
  change: number;
  changePercent: number;
  latestPrice: number;
}

const HighOrLow: React.FC<HighOrLowProps> = ({
  change,
  changePercent,
  latestPrice,
}) => {
  return (
    <div style={{ marginLeft: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>{changePercent > 0 ? <High /> : <Low />}</span>
        <h3 style={{ margin: '0' }}>{`$${latestPrice}`}</h3>
      </div>
      <h5
        style={{ color: changePercent > 0 ? SUCCESS : ERROR, margin: '0' }}
      >{`$${change.toFixed(2)} (${changePercent.toFixed(3)}%)`}</h5>
    </div>
  );
};

export default HighOrLow;
