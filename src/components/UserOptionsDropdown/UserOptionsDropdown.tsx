import React from 'react';
import Image from 'next/image';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import DropdownIcon from '../../../assets/icons/dropdown-icon.svg';

import useStyles from '../../../styles/hooks/useStyles';

interface UserOptionsDropdownProps {
  userName: string;
}

const UserOptionsDropdown: React.FC<UserOptionsDropdownProps> = ({
  userName,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.dropDownConainer}>
      <Accordion>
        <AccordionSummary
          expandIcon={<DropdownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{ borderRadius: '50px', background: '#0047bb' }}>
            <Image
              src="/assets/images/avatar-image.png"
              alt="Picture of the author"
              width={36}
              height={32}
            />
          </div>
          <Typography className={styles.dropDownHeading}>{userName}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>User Options</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default UserOptionsDropdown;
