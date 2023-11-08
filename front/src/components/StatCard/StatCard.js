import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/auth-service.js';

import style from './statcard.module.scss';

export interface iStatCard {
	header:		string,
	icon:		string,
	color1:		string,
	color2:		string,
	url:		string,
};

export const StatCard = (i: iStatCard) => {
	const navigate = useNavigate();
	const [data, setData] = useState('');

	useEffect(() => {
		if (i.url) {
			api.get(i.url)
				.then((response) => {
					setData(response.data.value);
				}).catch(error => {
					console.log(error);
				});
		}
	}, []);

	const customBackground = (color1, color2): React.CSSProperties => {
		if (color1 && color2) {
			return {
				background: `linear-gradient(90deg, ${color1}, ${color2})`
			};
		} else if (color1) {
			return {
				background: `${color1}`
			};
		} else if (color2) {
			return {
				background: `${color2}`
			}
		} else {
			return;
		}
	}

	return (
		<div
			style={customBackground(i.color1, i.color2)}
			className={style.statcard}
		>
			<div className={style.head}>
				<h1 className={style.header}>
					{i.header}
				</h1>
				<i className={i.icon}></i>
			</div>
			<div className={style.body}>
				<span className={style.value}>
					{(data) && (
						data
					)}
				</span>
				<span className={style.change}>
					{(data) && (
						`+${data} за последний месяц`
					)}
				</span>
			</div>
		</div>
	);
};
