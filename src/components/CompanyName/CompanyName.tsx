import React from 'react';

interface CompanyNamePops {
  companySymbol: string;
  companyName: string;
}

const CompanyName: React.FC<CompanyNamePops> = ({
  companySymbol,
  companyName,
}) => {
  return (
    <div>
      <h3 style={{ margin: '0' }}>{companySymbol}</h3>
      <h5 style={{ margin: '0', opacity: '0.5' }}>{companyName}</h5>
    </div>
  );
};

export default CompanyName;
