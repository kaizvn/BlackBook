import { Button, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import RUG, { DragArea, List } from 'react-upload-gallery';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Field, Fields, reduxForm } from 'redux-form';

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
const withForm = reduxForm({ form: 'reportForm' });
const ReportFormComponent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <link rel="stylesheet" href="./static/react-upload-gallery.css" />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Report
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Boomer Name"
              id="name"
              autoComplete="name"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone Number"
              id="phone"
              autoComplete="phone"
            />

            <RUG>
              <DragArea>
                {image => (
                  <div className={classes.card}>
                    <Grid item xs={12} md={12}>
                      <List image={image} name="evidents" id="evidents" />
                    </Grid>
                  </div>
                )}
              </DragArea>
            </RUG>
            <Button
              type="submit"
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
    </React.Fragment>
  );
};

export default withForm(ReportFormComponent);
