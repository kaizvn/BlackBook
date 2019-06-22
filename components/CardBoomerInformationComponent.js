import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Typography,
  makeStyles
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
});

export const CardBoomerInformationComponent = ({ boomer }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={5}
      className={classes.cardGrid}
      alignItems="center"
      justify="center"
      alignContent="center"
    >
      <Grid item key={boomer.name} xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {boomer.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {boomer.phone}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {boomer.address}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Total Amount:
                </Typography>
                <Typography variant="subtitle1" color="error">
                  {boomer.amount} VND
                </Typography>
              </CardContent>
            </div>
            <Hidden>
              <CardMedia
                className={classes.cardMedia}
                image="../static/boat.jpg"
                title="Image title"
              />
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    </Grid>
  );
};
