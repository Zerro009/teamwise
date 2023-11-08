import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import { Header } from './components/Header/Header.js';

import { Navbar } from './components/Navbar/Navbar.js';
import { Home } from './pages/Home/Home.js';
import { ResumePage } from './pages/ResumePage/ResumePage.js';
import { ProjectPage } from './pages/ProjectPage/ProjectPage.js';
import { MyResumePage } from './pages/MyResumePage/MyResumePage.js';
import { Sidebar } from './components/Sidebar/Sidebar.js';

import { Footer } from './components/Footer/Footer.js';

import style from './app.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const App = () => {
	return (
		<div className={style.app}>
			<Router>
				<Header />
				<div className={style.main}>
				<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/resume/' element={<ResumePage />} />
						<Route path='/project/' element={<ProjectPage />} />

						<Route path='/my-resume/' element={<MyResumePage />} />

						<Route path='*' element={<Home />} />
		  			</Routes>
				<Sidebar />
				</div>
			<Footer />
			</Router>
		</div>
	);
};
