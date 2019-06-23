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
import Router from 'next/router';
import clsx from 'clsx';

import { BOOMER_DANGER, BOOMER_REGRETTED, BOOMER_WARNING } from '../mockData';
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
    case BOOMER_DANGER:
      return 'Danger';
    case BOOMER_WARNING:
      return 'Warning';
    case BOOMER_REGRETTED:
      return 'Fixed';
    default:
      return '';
  }
};

const getDetail = phone => () => {
  Router.push(`/detail?phone=${phone}`);
};

export const CardBoomerInformationComponent = ({ boomer }) => {
  const classes = useStyles();
  return (
    <Grid item lg={12}>
      <Card className={classes.card}>
        <CardHeader
          onClick={getDetail(boomer.phone)}
          avatar={
            <Avatar
              aria-label="Recipe"
              className={clsx(
                classes.avatar,
                boomer.status === BOOMER_DANGER && classes.cardDanger,
                boomer.status === BOOMER_WARNING && classes.cardWarning,
                boomer.status === BOOMER_REGRETTED && classes.cardRegretted
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
