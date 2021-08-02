import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      justifyContent: 'center',
      height: '372px',
      alignItems: 'center',
    },
  })
);

const NotFound: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h3>Empresa não encontrada</h3>
      <p>
        Verifique se o simbolo digitado corresponde com alguma empresa da bolsa
      </p>
      <p>Exemplo: FB para Facebook, AMZN para AMAZON, MSFT para Microsoft...</p>
    </div>
  );
};
const LoadingChart: React.FC = () => {
  const classes = useStyles();
  const [isNotFound, setIsNotFound] = React.useState(false);

  React.useEffect(() => {
    const notFoundTimer = setTimeout(() => {
      return setIsNotFound(true);
    }, 2000);
    return () => clearTimeout(notFoundTimer);
  }, []);

  return (
    <div className={classes.root}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
        {isNotFound && <NotFound />}
      </div>
    </div>
  );
};

export default LoadingChart;
