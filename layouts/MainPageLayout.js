import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BookIcon from '@material-ui/icons/Book';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const blue500 = blue[500];

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Reporting, Regretting and Recovering.
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
  icon: {
    marginRight: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto'
  }
}));

const MainPageLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="relative" style={{ backgroundColor: blue500 }}>
        <Toolbar>
          <BookIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            BlackBook
          </Typography>
        </Toolbar>
      </AppBar>
      {/* body */}
      {children}
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          &copy; Wao Studio 2019
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          We can change the whole nation by a single small action.
        </Typography>
        <MadeWithLove />
      </footer>
      {/* End footer */}
    </div>
  );
};

export default MainPageLayout;
