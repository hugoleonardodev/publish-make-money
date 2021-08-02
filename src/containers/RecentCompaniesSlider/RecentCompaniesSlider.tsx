import React from 'react';
import Carousel from 'react-elastic-carousel';
// import getLocalStorage from '../../../services/store/getLocalStorage';
import MonetusIcon from '../../../assets/logos/monetus-logo.svg';
import RecentCompaniesCard from '../../components/RecentCompaniesCard/RecentCompaniesCard';
import { CarouselContainer } from './styles';

import RecentCompaniesIcon from '../../../assets/icons/recent-companies-icon.svg';
// import { StorageObject } from '../../../services/store/setLocalStorage';
import { useStocks } from '../../../core/hooks/useStocks';

const RecentCompaniesSlider: React.FC = () => {
  const { storage } = useStocks();
  // const [storage, setStorage] = React.useState({} as StorageObject);

  // React.useEffect(() => {
  //   const store = getLocalStorage();
  //   // console.log(store);
  //   setStorage(store);
  // }, []);
  // React.useEffect(() => {
  //   // if (refreshRecents) {
  //     const store = getLocalStorage();
  //     // console.log(store);
  //     // setRefreshRecents(false);
  //     return setStorage(store);
  //   // }
  //   // return setRefreshRecents(false);
  // }, []);
  // console.log(storage.recentCompanies);
  return (
    <CarouselContainer>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          margin: '0px',
        }}
      >
        <RecentCompaniesIcon style={{ transform: 'translateY(16px)' }} />
        <h3 style={{ padding: '32px 8px 0', margin: '0' }}>
          Empresas recentes
        </h3>
      </div>
      <Carousel
        isRTL={false}
        itemsToShow={1.33}
        pagination={false}
        itemPadding={[16, 8]}
        enableMouseSwipe={false}
      >
        {storage.recentCompanies ? (
          storage.recentCompanies.map((company, index) => (
            <RecentCompaniesCard
              key={`${company.name}-${index}`}
              companyLogo={<MonetusIcon style={{ zoom: '0.75' }} />}
              companyName={company.name}
              companySymbol={company.symbol}
              companyRating={company.rating}
            />
          ))
        ) : (
          <p>empty</p>
        )}
      </Carousel>
    </CarouselContainer>
  );
};
export default RecentCompaniesSlider;
