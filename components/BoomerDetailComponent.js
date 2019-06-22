import React from 'react';
import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';

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
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
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
