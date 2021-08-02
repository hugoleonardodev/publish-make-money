import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Global Styles

export const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.PrivateTabIndicator-root-6': {
      left: '0',
    },
    '.MuiTooltip-tooltip': {
      backgroundColor: '#0047bb',
    },
    '.MuiTooltip-arrow': {
      color: '#0047bb',
    },
    '.MuiButton-root': {
      padding: 0,
      minWidth: 40,
    },
    '.MuiOutlinedInput-input': {
      padding: '11px 14px',
      backgroundColor: '#fff',
    },
    '.MuiInputLabel-outlined': {
      transform: 'translate(14px, 12px) scale(1)',
    },
    '.MuiBox-root-10': {
      backgroundColor: ' rgba(0, 0, 255, 0.08)',
      padding: 0,
    },
    '.rec.rec-item-wrapper': {
      /* padding: 16px !important; */
      width: '300px !important',
    },
    '.rec.rec-arrow.rec-arrow-left': {
      transform: 'translate(680px, -72px)',
      background: 'transparent',
      boxShadow: 'none',
      position: 'absolute',
      color: '#0047BB',
      '&:hover': {
        background: 'transparent',
        boxShadow: 'none',
      },
      '&:focus': {
        background: 'transparent',
        boxShadow: 'none',
        color: '#0047BB',
        opacity: '0.7',
      },
      '&:disabled': {
        color: '#0047BB',
        opacity: '0.7',
      },
    },
    '.rec.rec-arrow.rec-arrow-right': {
      transform: ' translate(716px, -72px)',
      background: 'transparent',
      boxShadow: 'none',
      position: 'absolute',
      color: '#0047BB',
      '&:hover': {
        background: 'transparent',
        boxShadow: 'none',
      },
      '&:focus': {
        background: 'transparent',
        boxShadow: 'none',
        color: '#0047BB',
        opacity: '0.7',
      },
      '&:disabled': {
        color: '#0047BB',
        opacity: '0.7',
      },
    },
    '.MuiAccordionSummary-content': {
      margin: '0',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    '.MuiAccordion-rounded:last-child': {
      borderBottomLeftRadius: '50px',
      borderBottomRightRadius: '50px',
      boxShadow: 'none',
      border: '1px solid rgba(0,0,255, 0.2)',
    },
    '.MuiAccordion-rounded:first-child': {
      borderTopLeftRadius: '50px',
      borderTopRightRadius: '50px',
      boxShadow: 'none',
      border: '1px solid rgba(0,0,255, 0.2)',
    },
    '.MuiAccordion-rounded': {
      width: '372px',
      marginLeft: '16px',
    },
    body: {
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // flexDirections: 'column',
    },
    // a: {
    //   width: 'inherit',
    //   position: 'absolute',
    //   textDecoration: 'none',
    //   color: 'transparent',
    //   padding: '16px',
    // },
  },
})(() => null);

// Components with custom styles

export const MaterialIcons = withStyles({
  root: {
    fontFamily: 'Material Icons',
    fontSize: '2rem',
  },
})(Typography);

// export const TextInput = withStyles({
//   root: {},
// })(TextField);

// export const LoginForm = withStyles({
//   root: {},
// })(FormControl);
