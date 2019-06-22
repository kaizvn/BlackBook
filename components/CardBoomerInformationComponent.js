import {
  Button,
  Card,
  CardActionArea,
  CardActions,
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

const useStyles = makeStyles(theme => ({
  cardDetails: {
    flex: 1
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    display: 'flex'
  },
  cardMedia: {
    width: 60,
    height: 60,
    padding: 10,
    margin: 10,
    borderRadius: '50%',
    color: 'black',
    alignItems: 'center'
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
}));
export const CardBoomerInformationComponent = ({ boomer }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      md={6}
      alignItems="center"
      justify="center"
      alignContent="center"
    >
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {boomer.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph>
                {boomer.phone}
              </Typography>
              <Typography variant="subtitle1" noWrap>
                {boomer.address}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </div>
          <Hidden>
            <CardMedia
              className={clsx(
                classes.cardMedia,
                boomer.status === DANGER && classes.cardDanger,
                boomer.status === WARNING && classes.cardWarning,
                boomer.status === REGRETTED && classes.cardRegretted
              )}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
