import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
  makeStyles
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';
import ShareIcon from '@material-ui/icons/Share';

import clsx from 'clsx';

import { DANGER, REGRETTED, WARNING } from '../stores/BoomerState';
import { themeColor } from '../utils';

const useStyles = makeStyles(theme => ({
  cardDetails: {
    display: 'flex'
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
  avatar: {
    fontSize: 10,
    fontWeight: 'bold'
  }
}));

const getPartnerStatus = status => {
  switch (status) {
    default:
      return '';
    case DANGER:
      return 'Danger';
    case WARNING:
      return 'Warning';
    case REGRETTED:
      return 'Fixxed';
  }
};
export const CardBoomerInformationComponent = ({ boomer }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6} spacing={2}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="Recipe"
              className={clsx(
                classes.avatar,
                boomer.status === DANGER && classes.cardDanger,
                boomer.status === WARNING && classes.cardWarning,
                boomer.status === REGRETTED && classes.cardRegretted
              )}
            >
              {getPartnerStatus(boomer.status)}
            </Avatar>
          }
          title={boomer.name}
          subheader={boomer.phone}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {boomer.address}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};
