import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import { useState, useEffect } from 'react';

import { Header } from 'components/Header/Header';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import { Button } from 'components/Button/Button';
import { UserBrief } from 'components/UserBrief/UserBrief';

import style from './app.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const App = () => {
	return (
		<div className={style.app}>
			<Router>
				<Header/>
			</Router>
		</div>
	);
};
