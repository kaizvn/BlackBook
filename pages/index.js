import React from 'react';

import MainPageLayout from '../layouts/MainPageLayout';
import SearchComponent from '../components/SearchComponent';

const IndexPage = () => {
  return (
    <MainPageLayout>
      <SearchComponent />
    </MainPageLayout>
  );
};

export default IndexPage;
