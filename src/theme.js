import { blue, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const blue500 = blue[500];
const red500 = red[500];

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: blue500
    },
    secondary: {
      main: red500
    }
  }
});

export default theme;
