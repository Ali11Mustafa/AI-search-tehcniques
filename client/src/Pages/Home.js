import React from 'react';
import { useTranslation } from 'react-i18next'
import i18n from '../118n';

const Home = () => {
	const {t}=useTranslation();

	return <h1>{t('navbar.home')}</h1>;
};
export default Home;
