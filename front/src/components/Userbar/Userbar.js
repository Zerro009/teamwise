import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { UserBrief } from '../UserBrief/UserBrief.js';
import { Button } from '../Button/Button.js';

import { api, logout } from '../../services/auth-service.js';

import style from './userbar.module.scss';

export interface iUserbar {
	active:		bool,
	setActive:	void,
};

export const Userbar = (i: iUserbar) => {
	const navigate = useNavigate();
	const [active, setActive] = useState(false);
	const [user, setUser] = useState();

	useEffect(() => {
		api.get(`users/me/`)
			.then((response) => {
				setUser(response.data);
			}).catch(error => {
				console.log(error);
			});
	}, []);

	const onLogout = (e) => {
		e.preventDefault();
		logout();
		navigate('/');
		window.location.reload();
	}

	return (
		(user) &&
		<div
			className={style.userbar}
			onClick={() => setActive(!active)}
		>
				<div className={style.wrapper}>
				<img
					className={style.avatar}
					src={user.image}
					alt='avatar'
				/>
				{(active) ? <i className='fa fa-angle-up'></i> : <i className='fa fa-angle-down'></i>}
			</div>
			<div className={(active) ? clsx(style.expanded, style.active) : style.expanded}>
				<div className={style.wrapperBtns}>	
					<UserBrief {...user} />
					<Button
						width='100%'
						children=<div className={style.btn}>
								<i className='fa fa-users'></i>
								<span> Мои команды </span>
							</div>
						onClick={() => navigate('/my-team/')}
					/>
					<Button
						width='100%'
						children=<div className={style.btn}>
								<i className='fa fa-file'></i>
								<span>Мои резюме</span>
							</div>
						onClick={() => navigate('/my-resume/')}		
					/>	
					<Button
						width='100%'
						children=<div className={style.btn}>
								<i className='fa fa-arrow-right-from-bracket'></i>
								<span>Выход</span>
							</div>
						onClick={onLogout}
					/>
				</div>
			</div>
		</div>
	);
};
