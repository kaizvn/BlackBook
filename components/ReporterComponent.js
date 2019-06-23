import {
  Button,
  Container,
  Divider,
  Grid,
  InputBase,
  Paper,
  makeStyles
} from '@material-ui/core';
import { connect } from 'react-redux';
import React, { useState } from 'react';

import { doSubmitReporter } from '../stores/ReporterState';

const useStyles = makeStyles(() => ({
  homePage: {
    margin: 'auto',
    padding: '30px 0'
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
  }
}));

const connectToRedux = connect(
  state => ({
    reporter: state.reporter
  }),
  dispatch => ({
    onSubmit: message => dispatch(doSubmitReporter(message))
  })
);
const ReporterComponent = ({ onSubmit, reporter }) => {
  const classes = useStyles();
  const [inputValue, setInput] = useState('');

  return reporter.id ? (
    <div />
  ) : (
    <Grid
      className={classes.homePage}
      alignItems="center"
      justify="center"
      container
      spacing={0}
    >
      <Grid item lg={6} sm={6}>
        <Container>
          <Grid justify="center" container>
            <h1>Please enter your phone number</h1>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <form
              onSubmit={e => {
                e.preventDefault();
                onSubmit(inputValue);
              }}
              className={classes.form}
            >
              <Paper className={classes.paper}>
                <InputBase
                  lg={8}
                  value={inputValue}
                  onChange={e => setInput(e.currentTarget.value)}
                  style={{
                    marginLeft: 8,
                    flex: 1
                  }}
                  placeholder="We will contact you if this person regret what he did to you"
                  inputProps={{
                    'aria-label':
                      'We will contact you if this person regret what he did to you'
                  }}
                />
                <Divider
                  style={{
                    width: 1,
                    height: 28,
                    margin: 4
                  }}
                />
                <Button
                  color="primary"
                  onClick={e => {
                    e.preventDefault();
                    onSubmit(inputValue);
                  }}
                >
                  Submit
                </Button>
              </Paper>
            </form>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default connectToRedux(ReporterComponent);
