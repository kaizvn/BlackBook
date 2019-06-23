import { Button, Container, Grid, Slide, Typography } from '@material-ui/core';
import React from 'react';

import { CardBoomerInformationComponent } from './CardBoomerInformationComponent';
import MLink from '../src/MLink';

class BoomerResultsComponent extends React.Component {
  render() {
    const { boomers, isSearchFinished } = this.props;
    return (
      <Slide direction="up" in={isSearchFinished} mountOnEnter unmountOnExit>
        <Container maxWidth="md">
          {boomers.length === 0 ? (
            <Grid justify="center" container>
              <Typography align="center" color="secondary" component="p">
                No record in blackBook. But you can{' '}
                <MLink href="/report">
                  <Button color="secondary" variant="contained">
                    SUBMIT
                  </Button>
                </MLink>{' '}
                new one!
              </Typography>
            </Grid>
          ) : (
            <Grid container spacing={4}>
              {boomers.map((boomer, index) => (
                <CardBoomerInformationComponent boomer={boomer} key={index} />
              ))}
            </Grid>
          )}
        </Container>
      </Slide>
    );
  }
}

export default BoomerResultsComponent;
