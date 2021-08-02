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
  return (
    <div>
      <CompanySymbol>{companySymbol}</CompanySymbol>
      <CompanyTitles>{companyName}</CompanyTitles>
    </div>
  );
};

export default CompanyName;
