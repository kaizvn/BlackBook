import React from 'react';

import BoomerResultsComponent from '../components/BoomerResultsComponent';
import MainPageLayout from '../layouts/MainPageLayout';
import SearchComponent from '../components/SearchComponent';

const IndexPage = () => {
  return (
    <MainPageLayout>
      <SearchComponent />
      <BoomerResultsComponent />
    </MainPageLayout>
  );
};

export default IndexPage;
