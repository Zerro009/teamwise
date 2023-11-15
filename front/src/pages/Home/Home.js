import { StatCard } from '../../components/StatCard/StatCard.js';
import { getToken } from '../../services/auth-service.js';

import style from './home.module.scss';

export const Home = () => {
	return (
		<div className={style.home}>
			<StatCard
				header='Всего участников'
				icon='far fa-user'
				color1='#6969ff'
				color2='#9696ff'
				url='users/count/'
			/>
			<StatCard
				header='Выполнено проектов'
				icon='fa fa-diagram-project'
				color1='#69ff69'
				color2='#96ff96'
				url='users/count/'
			/>
			<StatCard
				header='Всего команд'
				icon='fa fa-users'
				color1='#ff6969'
				color2='#ff9696'
				url='users/count/'
			/>
		</div>
	);
};
