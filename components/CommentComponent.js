import React, { Fragment } from 'react';

import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Button,
  Divider
} from '@material-ui/core';

import { evidences } from '../mockData';

const CommentComponent = ({ evidenceIds }) => {
  let filteredEvidences = [];
  for (let evidenceId of evidenceIds) {
    const evidence = evidences.find(evidence => evidence.id === evidenceId);

    if (evidence) {
      const { by, date, phone, description } = evidence;
      filteredEvidences.push({ by, date, phone, description });
    }
  }

  return (
    <Container>
      <List>
        {filteredEvidences
          .map((item, key) => {
            return (
              <Fragment key={key}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={'/static/images/2.png'} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.phone || ''}
                    secondary={
                      <React.Fragment>
                        <big>{item.by}</big>
                        <br />
                        <i>{item.date || ''}</i>
                        <br />
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {item.description || ''}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <ListItem>
                  {item.photo && <img alt="" src={item.photo} />}
                  <Button size="small" color="primary">
                    View More
                  </Button>
                </ListItem>
                <Divider />
              </Fragment>
            );
          })
          .slice(0, 2)}
      </List>
    </Container>
  );
};

export default CommentComponent;
