import axios from 'axios';

export const getToken = () => {
	return JSON.parse(localStorage.getItem('token'));
};

export const setToken = (token) => {
	localStorage.setItem('token', JSON.stringify(token));
};

export const api = axios.create({
	baseURL:	process.env.REACT_APP_API,
	headers:	{
		'Authorization': 'Bearer ' + getToken(),
	}
});

export const logout = () => {
	localStorage.removeItem('token');
}
