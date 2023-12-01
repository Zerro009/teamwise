import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import { api, getAccessToken, setToken, logout } from 'services/auth-service';

export const Header = () => {
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
			navigate('/');
			window.location.reload();
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
				width="fit-content"
				height="fit-content"
				disabled={loading}
				onClick={onLogout}
				children="Logout"
			/>
			) : (
			<Button
				width="fit-content"
				height="fit-content"
				disabled={loading}
				onClick={onLogin}
			>
				Sign In
			</Button>
			)}
		</div>
	);
};
