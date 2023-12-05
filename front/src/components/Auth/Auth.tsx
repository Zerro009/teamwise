import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, ButtonVariant } from 'components/UI/Button/Button';
import { api, getAccessToken, setToken, logout } from 'services/auth-service';

export const Auth = () => {
	const navigate = useNavigate();

	const [searchParams, setSearchParams] = useSearchParams();
	const [code, setCode] = useState(searchParams.get('code'));
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (code) {
			api.post(`tokens/obtain/`,
			{
				'code':	code
			}
		)
		.then((response) => {
			setCode(null);
			setToken(response.data);
			response.status === 201
				? navigate('/username')
				: navigate('/main');
			window.location.reload()
			navigate('/username');
		}).catch(error => {
			console.log(error);
		}, []);

	}
}, []);

	const onLogout = (e) => {
		e.preventDefault();
		logout();
		window.location.reload();
	}

	const onLogin = (e) => {
		e.preventDefault()
		setLoading(true)
		window.location.replace(process.env.REACT_APP_LEADERID_AUTH)
	}

	return (
		<div> 
			{(getAccessToken()) ? (
			<Button
				disabled={loading}
				onClick={onLogout}
				variant={ButtonVariant.login}
			>
				Logout
			</Button>
			) : (
			<Button
				disabled={loading}
				onClick={onLogin}
				variant={ButtonVariant.login}
			>
				Sign In
			</Button>
			)}
		</div>
	);
};