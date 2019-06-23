import React from 'react';

import FinishedRecoverComponent from '../components/FinishedRecoverComponent';
import MainPageLayout from '../layouts/MainPageLayout';

const FinishedRecoverPage = props => {
  return (
    <MainPageLayout>
      <FinishedRecoverComponent {...props} />
    </MainPageLayout>
  );
};

FinishedRecoverPage.getInitialProps = ({ query }) => {
  return {
    isFE: !!query.isFE || false,
    isReported: !!query.isReported || false
  };
};

export default FinishedRecoverPage;
