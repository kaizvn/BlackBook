import React from 'react';
import { Grid, Container } from '@material-ui/core';

import EvidentsComponent from './EvidentsComponent';
import BoomerDetailComponent from './BoomerDetailComponent';
import CommentComponent from './CommentComponent';

const user = {
  name: 'Black book name',
  address: '123 Smart city',
  phone: '123456789'
};

const DetailPageComponent = () => {
  return (
    <main>
      <Grid
        alignItems="center"
        justify="center"
        container
        spacing={0}
        style={{ margin: '24px 0', maxWidth: 1366 }}
      >
        <Grid item lg={3}>
          <Container>
            <BoomerDetailComponent user={user} />
          </Container>
        </Grid>
        <Grid item lg={8}>
          <Container>
            <EvidentsComponent />
          </Container>
        </Grid>
        <Grid item lg={3}></Grid>
        <Grid item lg={8}>
          <CommentComponent />
        </Grid>
      </Grid>
    </main>
  );
};

export default DetailPageComponent;
