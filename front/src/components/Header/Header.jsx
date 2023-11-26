import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from 'components/Button/Button.tsx';
import { api, getAccessToken, setToken, logout } from 'services/auth-service';
import { MyNavMenu } from 'components/MyNavMenu/MyNavMenu.jsx';
import { SearchBar } from 'components/SearchBar/SearchBar.jsx';
import { MyNav } from 'components/MyNav/MyNav';
import style from './header.module.scss';

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

const onLogin = (e) => {
e.preventDefault()
setLoading(true)
window.location.replace(process.env.REACT_APP_LEADERID_AUTH)
}

	return (
		<div className={style.header}> 
			<div className={style.leftheader}>
				<button className={style.logo}> X </button>
				<SearchBar />
			</div>
			{(getAccessToken()) ? (
					<MyNav />
			) : (
			<Button
				width={"50px"}
				height={"30px"}
				disabled={loading}
				onClick={onLogin}
			>
				<div>login</div>
			</Button>
			)}
		</div>
	);
};
