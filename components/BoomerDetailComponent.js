import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
  Typography
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import React from 'react';
import Router from 'next/router';

const BoomerDetailComponent = ({ user }) => {
  return user ? (
    <Card>
      <CardActionArea>
        <Avatar
          alt="Remy Sharp"
          src={user.avatar || '/static/images/2.png'}
          style={{
            margin: 10,
            width: 150,
            height: 150
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.name || 'No name'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone: {user.phone || 'No phone'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Address: {user.address || 'No address'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Tooltip title="Report">
          <IconButton
            onClick={() =>
              Router.push(
                `/report?name=${user.name}&phone=${user.phone}&address=${user.address}`
              )
            }
          >
            <AddCircleOutlineIcon color="error" />
          </IconButton>
        </Tooltip>
        <Tooltip title="I'm regret :( !">
          <IconButton onClick={() => Router.push('/saveme')}>
            <AddCircleOutlineIcon color="primary" />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  ) : (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            No Boomer found
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BoomerDetailComponent;
