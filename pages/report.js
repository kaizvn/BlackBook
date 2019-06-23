import React from 'react';

import MainPageLayout from '../layouts/MainPageLayout';
import ReportFormComponent from '../components/ReportFormComponent';
import ReporterComponent from '../components/ReporterComponent';

const ReportPage = () => (
  <MainPageLayout>
    <ReporterComponent />
    <ReportFormComponent />
  </MainPageLayout>
);

export default ReportPage;
