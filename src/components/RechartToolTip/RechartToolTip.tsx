import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from '../../../styles/hooks/useStyles';

interface RechartToolTipProps {
  children: React.ReactElement<any, any>;
}

const RechartToolTip: React.FC<RechartToolTipProps> = ({ children }) => {
  const styles = useStyles();
  return (
    <Tooltip
      title="quote"
      aria-label="intraday-prices"
      placement="top"
      arrow
      className={styles.toolTip}
    >
      {children}
    </Tooltip>
  );
};

export default RechartToolTip;
