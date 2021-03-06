import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import MuiLink from '@material-ui/core/Link';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import MLink from '../src/MLink';
import ProTip from '../src/ProTip';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Material-UI
      </MuiLink>
      {' team.'}
    </Typography>
  );
}

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v4-beta example
        </Typography>
        <MLink href="/">Go to the main page</MLink>
        <ProTip />
        <MadeWithLove />
      </Box>
    </Container>
  );
}
