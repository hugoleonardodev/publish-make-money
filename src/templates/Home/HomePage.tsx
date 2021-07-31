import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import DashboardIcon from '../../../assets/icons/dashboard-icon.svg';
import MonetusIcon from '../../../assets/logos/monetus-icon.svg';

import useStyles from '../../../styles/hooks/useStyles';
import HomeDashboard from '../../layouts/HomeDashboard/HomeDashboard';
// import { useStocks } from '../../../core/hooks/useStocks';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const HomePage: React.FC = () => {
  const classes = useStyles();
  // const { isLoading } = useStocks();

  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };
  // if (isLoading) return <div>Loading</div>;
  return (
    <main className={classes.main}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab
          label={<MonetusIcon />}
          {...a11yProps(0)}
          disabled
          style={{ opacity: '1' }}
          className={classes.tab}
        />
        <Tab
          label={''}
          {...a11yProps(1)}
          disabled
          style={{ opacity: '1' }}
          className={classes.tab}
        />
        <Tab
          label={<DashboardIcon style={{ zoom: '1.5' }} />}
          {...a11yProps(2)}
          className={classes.tab}
        />
      </Tabs>

      <TabPanel value={value} index={2}>
        <HomeDashboard />
      </TabPanel>
    </main>
  );
};

export default HomePage;
