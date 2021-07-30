import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    color: theme.palette.primary.main,
    borderRight: `1px solid ${theme.palette.divider}`,
    height: '100vh',
    minWidth: '96px',
    [theme.breakpoints.up('sm')]: {
      minWidth: '96px',
    },
  },
  tab: {
    minWidth: '96px',
    [theme.breakpoints.up('sm')]: {
      minWidth: '96px',
    },
  },
}));

export default useStyles;
