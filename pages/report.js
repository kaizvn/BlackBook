import React from 'react';

import MainPageLayout from '../layouts/MainPageLayout';
import ReportFormComponent from '../components/ReportFormComponent';

const ReportPage = props => (
  <MainPageLayout>
    <ReportFormComponent {...props} />
  </MainPageLayout>
);

ReportPage.getInitialProps = ({ query = {} }) => {
  return query;
};

export default ReportPage;
