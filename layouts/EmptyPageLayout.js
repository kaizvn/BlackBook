import { Container } from '@material-ui/core';
import React from 'react';

const EmptyPageLayout = ({ children }) => (
  <Container component="main" maxWidth="xs">
    {children}
  </Container>
);

export default EmptyPageLayout;
