import { Button } from '../Button/Button.js';
import style from './sidebar.module.scss';

export const Sidebar = () => {
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
