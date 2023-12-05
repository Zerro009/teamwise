import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { AppRouter } from './components/AppRouter';
import style from './app.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const App = () => {
	return (
		<div className={style.app}>
			<Router>
				<AppRouter />
			</Router>
		</div>
	);
};
