import React from 'react';
import { CompanySymbol, CompanyTitles } from './styles';

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
      <CompanySymbol>{companySymbol}</CompanySymbol>
      <CompanyTitles>{fixedName}</CompanyTitles>
    </div>
  );
};

export default CompanyName;
