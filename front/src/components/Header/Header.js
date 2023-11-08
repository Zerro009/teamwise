import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { IconButton } from '../IconButton/IconButton.js';
import { Userbar } from '../Userbar/Userbar.js';
import { Button } from '../Button/Button.js';
import { getToken, setToken, logout, api } from '../../services/auth-service.js';

import style from './header.module.scss';
import logo from '../../assets/logo.svg';

export const Header = () => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const [code, setCode] = useState(searchParams.get('code'));
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (code) {
			api.post(`tokens/obtain/`,
				{
					'code': code
				}
			)
			.then((response) => {
				setCode(null);
				setToken(response.data.token);
				navigate('/');
				window.location.reload();
			}).catch(error => {
				console.log(error);
			});
		}
	});

	const onLogin = (e) => {
		e.preventDefault();
		window.location.replace(process.env.REACT_APP_LEADERID_AUTH);
	};

	return (
		<div className={style.header}>
			<img
				className={style.logo}
				src={logo}
			/>
			<div className={style.wrapper}>
				<div className={style.wrapperBtns}>
					<IconButton
						icon='fa fa-message'
					/>
					<IconButton
						icon='fa fa-bell'
					/>
				</div>
				{(getToken()) ? (
					<Userbar />
				) : (
					<Button
						width='80px'
						height='40px'
						children='Вход'
						onClick={onLogin}
					/>
				)}
			</div>
		</div>
	);
};
