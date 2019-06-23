import { Box, Button, Grid, Typography, makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import React from 'react';
import Router from 'next/router';

const green500 = green[500];

const useStyles = makeStyles(() => ({
  resultHome: {
    margin: 'auto',
    padding: '30px 0',
    backgroundColor: '#fff'
  },
  paper: {
    padding: '10px 10px',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1
  },
  form: {
    width: '100%'
  },
  FECredit: {
    color: green500
  }
}));

const FinishedRecoverComponent = ({ isFE, isReported }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        className={classes.resultHome}
        alignItems="center"
        justify="center"
        container
        spacing={0}
      >
        <Grid item lg={8} sm={12}>
          <Box mb={2} align="center">
            {isReported && (
              <Typography
                align="center"
                variant="h3"
                color="secondary"
                component="header"
              >
                Thank you for your contribute to make Vietnam great as usual.
              </Typography>
            )}
            {!isReported && isFE && (
              <Typography align="center" variant="h5" color="secondary">
                Your information are sent to{' '}
                <span className={classes.FECredit}>FE Credit</span>! The staff
                will contact you later for supporting.
                <br />
                <b>Good Luck!</b>
              </Typography>
            )}
            {!isReported && !isFE && (
              <Typography
                align="center"
                variant="h3"
                color="secondary"
                component="header"
              >
                Thank you!
                <br />
                Faith of humanity restored!
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid align="center" item lg={12}>
          <Button
            onClick={() => {
              Router.push('/');
            }}
            color="primary"
            variant="contained"
          >
            Back To Dashboard
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default FinishedRecoverComponent;
