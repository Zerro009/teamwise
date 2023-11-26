import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import { api, getAccessToken, setToken, logout } from 'services/auth-service';
import { MyNavMenu } from 'components/MyNavMenu/MyNavMenu';
import { MyNav } from 'components/MyNav/MyNav';

import style from './header.module.scss';

export const Header = () => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const [code, setCode] = useState(searchParams.get('code'));
	 

	useEffect(() => {
		if (code) {
			api.post(`tokens/obtain/`,
				{
					code: code
				}
			)
			.then((response) => {
				console.log(response.data);
				setCode(null);
				setToken(response.data);
				navigate('/');
			}).catch(error => {
				console.log(error);
			});
		}
	}, [code]);

	const onLogin = () => {
		window.location.replace(process.env.REACT_APP_LEADERID_AUTH);
	}

	return (
		<div className={style.header}> 
			<div className={style.leftheader}>
				<button className={style.logo}> X </button>
			</div>
			{(getAccessToken()) ? (
				<MyNav />
			) : (
			<Button
				children='LOGIN'
				onClick={() => onLogin()}
			/>
			)}
		</div>
	);
};
