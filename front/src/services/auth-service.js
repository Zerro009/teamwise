import axios from 'axios';

export const getAccessToken = () => {
	const access_token = JSON.parse(localStorage.getItem('access_token'));
	return access_token;
}

export const setToken = (token) => {
	localStorage.setItem('access_token', JSON.stringify(token.access_token));
	localStorage.setItem('refresh_token', JSON.stringify(token.refresh_token));
};

export const api = axios.create({
	baseURL:	process.env.REACT_APP_API,
	headers:	{
		'Authorization': 'Bearer ' + getAccessToken(),
	}
});

export const logout = () => {
	localStorage.removeItem('access_token');
	localStorage.removeItem('refresh_token');
}
