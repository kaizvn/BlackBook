import React from 'react';
import { Grid, Container } from '@material-ui/core';

import EvidentsComponent from './EvidentsComponent';
import BoomerDetailComponent from './BoomerDetailComponent';
import CommentComponent from './CommentComponent';

import { boomers } from '../mockData';

const DetailPageComponent = ({ phone }) => {
  const boomer = boomers.find(boomer => boomer.phone === phone);
  return (
    <main>
      <Grid
        alignItems="center"
        justify="center"
        container
        spacing={0}
        style={{ margin: '24px 0' }}
      >
        <Grid item lg={3}>
          <Container>
            <BoomerDetailComponent user={boomer} />
          </Container>
        </Grid>
        <Grid item lg={8}>
          <Container>
            <EvidentsComponent evidenceIds={boomer.evidenceIds} />
          </Container>
        </Grid>
        <Grid item lg={3}></Grid>
        <Grid item lg={8}>
          <CommentComponent evidenceIds={boomer.evidenceIds} />
        </Grid>
      </Grid>
    </main>
  );
};

export default DetailPageComponent;
