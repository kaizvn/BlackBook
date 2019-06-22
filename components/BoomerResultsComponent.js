import { Container, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import React from 'react';

import { CardBoomerInformationComponent } from './CardBoomerInformationComponent';

const connectToRedux = connect(
  state => ({
    boomers: state.boomers
  }),
  null
);

class BoomerResultsComponent extends React.Component {
  render() {
    const { boomers = {} } = this.props;
    return (
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {boomers.map((boomer, index) => (
            <CardBoomerInformationComponent boomer={boomer} key={index} />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default connectToRedux(BoomerResultsComponent);
