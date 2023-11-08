import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import style from './navbarbutton.module.scss';

export interface iNavbarButton {
	icon:		string,
	children:	Object,
	route:		string
};

export const NavbarButton = (i: iNavbarButton) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [active, setActive] = useState();

	useEffect(() => {
		(location.pathname === i.route) ? setActive(true) : setActive(false);
	}, [location.pathname, i.route]);

	return (
		<button
			className={(active) ? clsx(style.navbarbutton, style.active) : style.navbarbutton}
			onClick={() => navigate(i.route)}
		>
			<i className={i.icon}></i>
			<div className={style.content}>
				{i.children}
			</div>
		</button>
	);
};
