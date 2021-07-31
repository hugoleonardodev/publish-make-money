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
import { IntradayPrice, useStocks } from '../../../core/hooks/useStocks';
import CompanyName from '../../components/CompanyName';
import FavoriteButton from '../../components/FavoriteButton';
import HighOrLow from '../../components/HighOrLow';
import RechartToolTip from '../../components/RechartToolTip/RechartToolTip';
import Search from '../../../assets/icons/search-icon.svg';
import useStyles from '../../../styles/hooks/useStyles';
import DashboardIcon from '../../../assets/icons/dashboard-icon.svg';

const domain = [
  '09:30',
  '10:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '15:30',
  '15:59',
];

const HomeDashboard: React.FC = () => {
  const styles = useStyles();
  const { stock } = useStocks();
  const { intradayPrice } = stock;
  const parseData = (intradayData: IntradayPrice[]) => {
    const domainHours = intradayData.map((e: IntradayPrice) => {
      if (domain.some((f) => f === e.minute)) {
        return {
          name: e.minute,
          uv: e.close,
        };
      }
    });
    // console.log(domainHours);
    const result = domainHours.filter((g) => g !== undefined);

    return result;
  };
  const data = parseData(intradayPrice);
  // console.log(data);

  const CustomTooltip = ({ active, payload, _label }: any) => {
    if (active && payload && payload.length) {
      return (
        <RechartToolTip>
          <p
            style={{ color: 'white' }}
            className="label"
          >{`$${payload[0].value}`}</p>
          {/* <p className="intro">{getIntroOfPage(label)}</p> */}
          {/* <p className="desc">Anything you want can be displayed here.</p> */}
        </RechartToolTip>
      );
    }

    return null;
  };
  return (
    <section>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <DashboardIcon style={{ zoom: '1.5' }} />
        <h1 style={{ marginLeft: '16px' }}>Dasboard</h1>
      </div>
      <div style={{ marginTop: '16px' }}>
        <TextField
          id="outlined-basic"
          label="Buscar empresa"
          variant="outlined"
        />

        <Button className={styles.searchButton}>
          <Search style={{ zoom: '1.5' }} />
        </Button>
      </div>
      <div
        style={{
          backgroundColor: '#fff',
          marginTop: '32px',
          paddingTop: '28px',
          boxShadow: '0px 4px 12px rgb(222 222 231 / 40%)',
          borderRadius: '8px',
        }}
      >
        <div style={{ display: 'flex', marginLeft: '24px' }}>
          <FavoriteButton />
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
              currentQuote={stock.currentPrice.latestPrice}
              lastQuote={stock.intradayPrice[0].close}
            />
          </div>
        </div>
        <AreaChart
          width={720}
          height={320}
          data={data}
          style={{ marginTop: '16px' }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="1">
              <stop offset="5%" stopColor="#0047BB" stopOpacity={0.8} />
              <stop offset="70%" stopColor="#0047BB" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* <Line
          type="monotone"
          dataKey="uv"
          stroke="#0047BB"
          strokeWidth="2px"
          activeDot={{ stroke: '#0047BB', strokeWidth: 2, r: 6.29 }}
        /> */}
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis
            domain={[intradayPrice[0].low - 0.75, intradayPrice[0].high + 0.75]}
          />

          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="uv"
            stroke="#0047BB"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
    </section>
  );
};

export default HomeDashboard;