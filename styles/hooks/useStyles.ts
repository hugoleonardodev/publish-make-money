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
    marginTop: theme.spacing(2),
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
  toolTip: {
    backgroundColor: theme.palette.primary.main,
    // color: theme.palette
  },
  searchButton: {
    fontSize: theme.spacing(5),
    border: '2px solid rgba(0, 0, 0, 0.23)',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  favoriteCard: {
    display: 'flex',
    width: '352px',
    justifyContent: 'space-between',
    boxShadow: '0px 8px 20px -2px rgb(43 37 63 / 10%)',
    borderRadius: '8px',
    marginTop: '20px',
    alignItems: 'center',
    background: '#fafafa',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  recentCard: {
    display: 'flex',
    width: '352px',
    justifyContent: 'space-between',
    boxShadow: '0px 8px 20px -2px rgb(43 37 63 / 10%)',
    borderRadius: '8px',
    marginTop: '20px',
    alignItems: 'center',
    background: '#fafafa',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  loadingChart: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    justifyContent: 'center',
    height: '372px',
    alignItems: 'center',
  },
  dropDownConainer: {
    width: '100%',
  },
  dropDownHeading: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default useStyles;
