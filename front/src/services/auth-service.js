import axios from 'axios';

export const getToken = () => {
	return JSON.parse(localStorage.getItem('token'));
};

export const getAccessToken = () => {
	const token = JSON.parse(localStorage.getItem('token'));
	return (token) ? token.access_token : undefined;
}

export const setToken = (token) => {
	localStorage.setItem('token', JSON.stringify(token));
};

export const api = axios.create({
	baseURL:	process.env.REACT_APP_API,
	headers:	{
		'Authorization': 'Bearer ' + getAccessToken(),
	}
});

export const logout = () => {
	localStorage.removeItem('token');
}
