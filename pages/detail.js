import React from 'react';
import MainPageLayout from '../layouts/MainPageLayout';
import DetailPageComponent from '../components/DetailPageComponent';

const DetailPage = ({ phone }) => {
	return (
		<MainPageLayout>
			<DetailPageComponent phone={phone} />
		</MainPageLayout>
	);
};

DetailPage.getInitialProps = ({ query }) => ({
	phone: query.phone
});

export default DetailPage;
