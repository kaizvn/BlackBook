import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

import { doSearching } from '../stores/SearchState';

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
    isSearching: state.isSearching
  }),
  dispatch => ({
    onSubmit: message => dispatch(doSearching(message))
  })
);

const SearchComponent = ({ onSubmit }) => {
  const classes = useStyles();
  const [inputValue, setInput] = useState('');
  return (
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
                  onChange={e => setInput(e.currentTarget.value)}
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
        </Container>
      </Grid>
    </Grid>
  );
};

export default connectToRedux(SearchComponent);
