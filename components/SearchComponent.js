import { Typography, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

import { doSearching, stopSearching } from '../stores/SearchState';
import BoomerResultsComponent from './BoomerResultsComponent';
import MLink from '../src/MLink';

const useStyles = makeStyles(() => ({
  searchHome: {
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
    isSearching: state.isSearching,
    isSearchFinished: state.isSearchFinished,
    boomers: state.boomers
  }),
  dispatch => ({
    onSubmit: message => {
      dispatch(doSearching(message));
      dispatch(stopSearching());
    },
    setSearching: isFinished => {
      isFinished && dispatch(doSearching());
    }
  })
);

const SearchComponent = ({
  onSubmit,
  setSearching,
  isSearchFinished,
  boomers
}) => {
  const classes = useStyles();
  const [inputValue, setInput] = useState('');
  return (
    <React.Fragment>
      <Grid
        className={classes.searchHome}
        alignItems="center"
        justify="center"
        container
        spacing={0}
      >
        <Grid item lg={6} sm={12}>
          <Container>
            <Grid justify="center" container>
              <h1>BlackBook</h1>
            </Grid>
            <Grid container>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  onSubmit(inputValue);
                }}
                className={classes.form}
              >
                <Paper className={classes.paper}>
                  <InputBase
                    value={inputValue}
                    onChange={e => {
                      setSearching(isSearchFinished);
                      setInput(e.currentTarget.value);
                    }}
                    style={{
                      marginLeft: 8,
                      flex: 1
                    }}
                    placeholder="What / Who are you looking for?"
                    inputProps={{
                      'aria-label': 'What / Who are you looking for?'
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
                    <SearchIcon /> Search
                  </Button>
                </Paper>
              </form>
            </Grid>
            {!isSearchFinished && (
              <Grid justify="center" container>
                <Typography align="center" color="secondary" component="p">
                  Someone bothering you?{' '}
                  <MLink href="/report">Report them!</MLink>
                </Typography>
              </Grid>
            )}
          </Container>
        </Grid>
      </Grid>

      {!!boomers && isSearchFinished && (
        <BoomerResultsComponent
          boomers={boomers}
          isSearchFinished={isSearchFinished}
        />
      )}
    </React.Fragment>
  );
};

export default connectToRedux(SearchComponent);
