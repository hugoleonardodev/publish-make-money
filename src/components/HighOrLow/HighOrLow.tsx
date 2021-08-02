import React from 'react';
// import { useStocks } from '../../../core/hooks/useStocks';
import High from '../../../assets/icons/high-icon.svg';
import Low from '../../../assets/icons/low-icon.svg';

interface HighOrLowProps {
  // currentQuote: number;
  // lastQuote: number;
  change: number;
  changePercent: number;
  latestPrice: number;
}

export const SUCCESS = '#79c300';
export const ERROR = '#d64b45';

// const getRoughDifference = (change: number, changePercent: number) => {
//   const roughDifference = currentQuote - lastQuote;
//   // const roughDifferenceString = roughDifference;
//   // const resultInDollars = `$${roughDifferenceString}`;
//   return roughDifference;
// };
// const getRating = (roughDifference: number, lastQuote: number) => {
//   const rating = roughDifference / lastQuote;
//   return rating;
// };
const HighOrLow: React.FC<HighOrLowProps> = ({
  change,
  changePercent,
  latestPrice,
}) => {
  // const roughDifference = getRoughDifference(currentQuote, lastQuote);
  // const rating = getRating(roughDifference, lastQuote);

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
