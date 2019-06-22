import {
  Button,
  Card,
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
    display: 'flex',
    flexDirection: 'row'
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
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
  },
  cardEvidents: {
    height: 100
  },
  details: {
    flex: 1,
    flexDirection: 'row'
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
      <Card>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardEvidents}
            image="../static/boat.jpg"
            title="Image title"
          />
          <div className={classes.cardDetails}>
            <div className={classes.details}>
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
              <Card
                className={clsx(
                  classes.cardMedia,
                  boomer.status === DANGER && classes.cardDanger,
                  boomer.status === WARNING && classes.cardWarning,
                  boomer.status === REGRETTED && classes.cardRegretted
                )}
              />
            </Hidden>
          </div>
        </Card>
      </Card>
    </Grid>
  );
};
