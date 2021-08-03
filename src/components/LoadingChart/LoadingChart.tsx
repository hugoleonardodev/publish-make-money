import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from '../../../styles/hooks/useStyles';

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
  const styles = useStyles();
  const [isNotFound, setIsNotFound] = React.useState(false);

  React.useEffect(() => {
    const notFoundTimer = setTimeout(() => {
      return setIsNotFound(true);
    }, 2000);
    return () => clearTimeout(notFoundTimer);
  }, []);

  return (
    <div className={styles.loadingChart}>
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
