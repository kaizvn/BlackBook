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

import clsx from 'clsx';

import { DANGER, REGRETTED, WARNING } from '../stores/BoomerState';
import { themeColor } from '../utils';

const useStyles = makeStyles({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  cardWarning: {
    backgroundColor: themeColor.warning
  },
  cardDanger: {
    backgroundColor: themeColor.danger
  },
  cardRegretted: {
    backgroundColor: themeColor.regretted
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
          <Card
            className={clsx(
              classes.card,
              boomer.status === DANGER && classes.cardDanger,
              boomer.status === WARNING && classes.cardWarning,
              boomer.status === REGRETTED && classes.cardRegretted
            )}
          >
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {boomer.name}
                </Typography>
                <Typography variant="subtitle1" color="textPrimary" paragraph>
                  {boomer.phone}
                </Typography>
                <Typography variant="subtitle1">{boomer.address}</Typography>
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
