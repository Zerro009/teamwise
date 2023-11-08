import { CreateCard } from '../../components/CreateCard/CreateCard.js';

import style from './myresumepage.module.scss';

export const MyResumePage = () => {
	return (
		<div className={style.myresumepage}>
			<h1 className={style.header}>
				Мои резюме
			</h1>
		</div>
	);
};
