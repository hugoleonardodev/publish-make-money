import { Button, TextField } from '@material-ui/core';
import React from 'react';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from 'recharts';
import CompanyName from '../../components/CompanyName';
import FavoriteButton from '../../components/FavoriteButton';
import HighOrLow from '../../components/HighOrLow';
import RechartToolTip from '../../components/RechartToolTip/RechartToolTip';
import LoadingChart from '../../components/LoadingChart/LoadingChart';
import RecentCompaniesSlider from '../../containers/RecentCompaniesSlider/RecentCompaniesSlider';
import { useStocks } from '../../../core/hooks/useStocks';

import Search from '../../../assets/icons/search-icon.svg';
import DashboardIcon from '../../../assets/icons/dashboard-icon.svg';

import { addListenerToHitSearchButtonWithEnter } from '../../../common/helpers';
import parseData from '../../../common/helpers/parseData';

import useStyles from '../../../styles/hooks/useStyles';

const HomeDashboard: React.FC = () => {
  const {
    stock,
    handleInputSymbol,
    symbol,
    handleSearch,
    isLoading,
    isMarketOpen,
  } = useStocks();

  const styles = useStyles();

  const { intradayPrice } = stock;

  const chartParsedData = parseData(intradayPrice, isMarketOpen);

  const CustomTooltip = ({ active, payload, _label }: any) => {
    if (active && payload && payload.length) {
      return (
        <RechartToolTip>
          <p
            style={{ color: 'white' }}
            className="label"
          >{`$${payload[0].value}`}</p>
        </RechartToolTip>
      );
    }
    return null;
  };

  React.useEffect(() => {
    addListenerToHitSearchButtonWithEnter();
  }, []);

  return (
    <section style={{ margin: '32px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <DashboardIcon style={{ zoom: '1.5' }} />
        <h1 style={{ marginLeft: '16px' }}>Dashboard</h1>
      </div>
      <div style={{ marginTop: '16px' }}>
        <TextField
          id="input-text"
          label="Buscar empresa"
          variant="outlined"
          onChange={handleInputSymbol}
          value={symbol}
        />
        <Button
          className={styles.searchButton}
          onClick={() => handleSearch(symbol)}
          id="search-button"
          data-testid="search-button"
        >
          <Search style={{ zoom: '1.5' }} />
        </Button>
      </div>
      <div
        style={{
          backgroundColor: '#fff',
          marginTop: '32px',
          padding: '28px 20px 28px 20px',
          boxShadow: '0px 4px 12px rgb(222 222 231 / 40%)',
          borderRadius: '8px',
          minWidth: '768px',
          minHeight: '432px',
        }}
      >
        {isLoading ? (
          <LoadingChart />
        ) : (
          <>
            <div style={{ display: 'flex', marginLeft: '24px' }}>
              <FavoriteButton hasValue={stock.currentPrice.symbol} />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginLeft: '8px',
                }}
              >
                <CompanyName
                  companySymbol={stock.currentPrice.symbol}
                  companyName={stock.currentPrice.companyName}
                />
                <HighOrLow
                  change={stock.currentPrice.change}
                  changePercent={stock.currentPrice.changePercent}
                  latestPrice={stock.currentPrice.latestPrice}
                />
              </div>
            </div>
            <AreaChart
              width={720}
              height={320}
              data={chartParsedData}
              style={{ marginTop: '16px' }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="5%" stopColor="#0047BB" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#0047BB" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis domain={[intradayPrice[0].low, intradayPrice[0].high]} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#0047BB"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </>
        )}
      </div>
      <RecentCompaniesSlider />
    </section>
  );
};

export default HomeDashboard;
