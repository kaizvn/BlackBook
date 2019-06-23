import { flow, map, uniqBy } from 'lodash/fp';
import {
  makeStyles,
  Button,
  Container,
  Grid,
  Paper,
  FormGroup,
  Radio
} from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import RUG, { DragArea, List } from 'react-upload-gallery';
import React, { useState } from 'react';
import Router from 'next/router';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

const useStyles = makeStyles(theme => ({
  searchHome: {
    margin: 'auto',
    padding: '30px 0'
  },
  paper: {
    padding: '10px 10px',
    // margin: '10px',
    width: '100%',
    display: 'flex',
    flexGrow: 1,
    margin: 'auto',
    textAlign: 'left'
  },
  list: {
    display: 'flex',
    flexDirection: 'column'
    // alignItems:' center'
  },
  form: {
    width: '100%',
    margin: 'auto',
    textAlign: 'center'
  },
  image: {
    width: 20,
    height: 20,
    verticalAlign: 'middle',
    margin: '0px 5px'
  },
  card: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

const onSubmit = value => {
  const url = value == '3' ? '/finished?isFE=true' : '/finished';
  Router.push(url);
};
const SaveMeComponent = ({}) => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState('a');
  const [displayUpload, setDisplayUpload] = useState(false);
  const [images, setImages] = useState([]);
  function handleChange(event) {
    const { value } = event.target;
    setSelectedValue(value);
    if (value == '3') {
      setDisplayUpload(false);
      return;
    }
    setDisplayUpload(true);
  }

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
            <h1>Select how to heal shipper's suferring</h1>
          </Grid>
          <Grid container>
            <form className={classes.form}>
              <Paper className={classes.paper}>
                <FormGroup className={classes.list}>
                  <div>
                    <Radio
                      checked={selectedValue === '1'}
                      onChange={handleChange}
                      value="1"
                      name="radio-button-demo"
                      color="primary"
                      inputProps={{ 'aria-label': '1' }}
                    />
                    <AccountBalanceIcon className={classes.image} />
                    Bank Transfer{' '}
                  </div>
                  <div>
                    <Radio
                      checked={selectedValue === '2'}
                      onChange={handleChange}
                      value="2"
                      name="radio-button-demo"
                      color="primary"
                      inputProps={{ 'aria-label': '2' }}
                    />
                    <img
                      className={classes.image}
                      alt=""
                      src="/static/images/vn-post.png"
                    />
                    VN Post
                  </div>
                  <div>
                    <Radio
                      checked={selectedValue === '3'}
                      onChange={handleChange}
                      value="3"
                      name="radio-button-demo"
                      color="primary"
                      inputProps={{ 'aria-label': '3' }}
                    />
                    <SentimentVeryDissatisfiedIcon className={classes.image} />I
                    don't have any money
                  </div>
                </FormGroup>
              </Paper>
              <Button
                style={{ margin: '5px 0' }}
                variant="contained"
                color="primary"
                onClick={e => {
                  e.preventDefault();
                  onSubmit(selectedValue);
                }}
              >
                <ThreeSixtyIcon /> Submit
              </Button>
            </form>
          </Grid>
          <Grid container>
            {displayUpload && (
              <Container component="main" maxWidth="xs">
                <link
                  rel="stylesheet"
                  href="/static/react-upload-gallery.css"
                />
                <div className={classes.paper}>
                  <form
                    className={classes.form}
                    onSubmit={e => {
                      e.preventDefault();
                      // onSubmit({ address, phone, images, name, description });
                    }}
                    noValidate
                  >
                    <RUG
                      accept={['jpg', 'jpeg', 'png', 'gif']}
                      type="card"
                      onChange={images => {
                        const imgUrls = flow(
                          uniqBy('name'),
                          map('source')
                        )(images);
                        setImages(imgUrls); // save current component
                      }}
                    >
                      <DragArea>
                        {image => (
                          <div className={classes.card}>
                            <Grid item xs={12} md={12}>
                              <List image={image} />
                            </Grid>
                          </div>
                        )}
                      </DragArea>
                    </RUG>
                  </form>
                </div>
              </Container>
            )}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default SaveMeComponent;
