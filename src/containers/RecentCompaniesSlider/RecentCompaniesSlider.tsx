import React from 'react';
import Carousel from 'react-elastic-carousel';
import getLocalStorage, {
  StorageObject,
} from '../../../services/store/getLocalStorage';
import MonetusIcon from '../../../assets/logos/monetus-logo.svg';
import RecentCompaniesCard from '../../components/RecentCompaniesCard/RecentCompaniesCard';
import { CarouselContainer } from './styles';

import RecentCompaniesIcon from '../../../assets/icons/recent-companies-icon.svg';

const RecentCompaniesSlider: React.FC = () => {
  // const data = 'RecentCompaniesSlider';
  const [storage, setStorage] = React.useState({} as StorageObject);

  React.useEffect(() => {
    const store = getLocalStorage();
    // console.log(store);
    setStorage(store);
  }, []);
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
        {storage.favoriteCompanies ? (
          storage.favoriteCompanies.map((company) => (
            <RecentCompaniesCard
              key={company.name}
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
