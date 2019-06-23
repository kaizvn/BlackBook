import { Button, Container, Grid, Slide } from '@material-ui/core';
import { connect } from 'react-redux';
import { flow, map, uniqBy } from 'lodash/fp';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import RUG, { DragArea, List } from 'react-upload-gallery';
import React, { useState } from 'react';
import Router from 'next/router';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import ReporterComponent from './ReporterComponent';

function submitReport(payload) {
  console.log('data', payload);
  return {
    type: 'REPORT_SUBMITTED',
    payload
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  card: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

const connectToRedux = connect(
  state => ({
    reporter: state.reporter
  }),
  dispatch => ({
    onSubmit: report => {
      dispatch(submitReport(report));
      Router.push('/finished?isReported=true');
    }
  })
);

const ReportFormComponent = ({ onSubmit, reporter, ...props }) => {
  const classes = useStyles();
  const [name, setName] = useState(props.name);
  const [phone, setPhone] = useState(props.phone);
  const [address, setAddress] = useState(props.address);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');
  return !reporter.id ? (
    <ReporterComponent />
  ) : (
    <Slide direction="up" in={reporter.id && true} mountOnEnter unmountOnExit>
      <Container component="main" maxWidth="xs">
        <link rel="stylesheet" href="/static/react-upload-gallery.css" />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reporter: {reporter.id}
          </Typography>

          <form
            className={classes.form}
            onSubmit={e => {
              e.preventDefault();
              onSubmit({ address, phone, images, name, description });
            }}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Boomer Name"
              id="name"
              value={name}
              onChange={e => {
                setName(e.currentTarget.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoFocus
              value={address}
              onChange={e => {
                setAddress(e.currentTarget.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phone"
              value={phone}
              label="Phone Number"
              id="phone"
              onChange={e => {
                setPhone(e.currentTarget.value);
              }}
            />

            <TextField
              multiline
              rows={5}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              id="description"
              onChange={e => {
                setDescription(e.currentTarget.value);
              }}
            />

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
            <Button
              type="submit"
              onClick={() => {
                onSubmit({ address, phone, images, name, description });
              }}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Report
            </Button>
          </form>
        </div>
      </Container>
    </Slide>
  );
};

export default connectToRedux(ReportFormComponent);
