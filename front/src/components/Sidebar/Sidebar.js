import { useState, useEffect } from 'react';

import { Button } from '../Button/Button.js';
import { ResumeBrief } from '../ResumeBrief/ResumeBrief.js';
import style from './sidebar.module.scss';
import axios from 'axios';

export const Sidebar = () => {
	const [data, setData] = useState();

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API}hh/resume/top/`)
			.then((response) => {
				setData(response.data);
			}).catch(error => {
				console.log(error);
			})
	}, []);

	return (
		<div className={style.sidebar}>
			<div className={style.headblock}>
			</div>
			<div className={style.body}>
				<div className={style.wrapperBtns}>
					<Button
						children='Проекты'
					/>
					<Button
						children='Команды'
					/>
					<Button
						children='Резюме'
					/>
				</div>
				<div className={style.wrapperBriefs}>
				</div>
			</div>
		</div>
	);
};
