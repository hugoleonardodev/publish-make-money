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
    // minHeight: theme.spacing(8),
    // height: '-webkit-fill-available',
    fontSize: theme.spacing(5),
    // padding: theme.spacing(2),
    border: '2px solid rgba(0, 0, 0, 0.23)',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    // width: '-webkit-fill-available',
    // margin: theme.spacing(2),
    // textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

export default useStyles;
