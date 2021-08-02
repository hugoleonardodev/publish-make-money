import React from 'react';
import Image from 'next/image';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import DropdownIcon from '../../../assets/icons/dropdown-icon.svg';

import UserAvatar from '../../../assets/images/avatar-image.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      color: theme.palette.primary.main,
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

interface UserOptionsDropdown {
  userName: string;
}

const UserOptionsDropdown: React.FC<UserOptionsDropdown> = ({ userName }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<DropdownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{ borderRadius: '50px', background: '#0047bb' }}>
            <Image
              src={UserAvatar}
              alt="Picture of the author"
              width={36}
              height={32}
            />
          </div>
          {/* <img src={UserAvatar} alt="user-avatar" /> */}
          <Typography className={classes.heading}>{userName}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>User Options</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default UserOptionsDropdown;
