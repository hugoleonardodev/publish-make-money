import React from 'react';

interface CompanyNameProps {
  companySymbol: string;
  companyName: string;
}

const CompanyName: React.FC<CompanyNameProps> = ({
  companySymbol,
  companyName,
}) => {
  const nameArray = companyName.split(' ');
  const fixedName = `${nameArray[0]} ${nameArray[1]}`;
  return (
    <div>
      <h3 style={{ margin: '0', paddingLeft: '8px' }}>{companySymbol}</h3>
      <h5 style={{ margin: '0', opacity: '0.5', paddingLeft: '8px' }}>
        {fixedName}
      </h5>
    </div>
  );
};

export default CompanyName;
