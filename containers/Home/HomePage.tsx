import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import DashboardIcon from '../../assets/icons/dashboard-icon.svg';

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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    color: theme.palette.primary.main,
    borderRight: `1px solid ${theme.palette.divider}`,
    height: '100vh',
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label={<DashboardIcon />} {...a11yProps(0)} disabled />
        <Tab label="Dashboard" {...a11yProps(1)} />
      </Tabs>
      {/* <TabPanel value={value} index={0}>
        Dashboard
      </TabPanel> */}
      <TabPanel value={value} index={1}>
        Dashboard
      </TabPanel>
    </div>
  );
};

export default HomePage;
