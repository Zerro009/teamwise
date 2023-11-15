import { useNavigate } from 'react-router-dom';

import style from './userbrief.module.scss';
import avatar from '../../assets/user.jpg';

export interface iUserBrief {
	uid:		number,
	image:		string,
	first_name:	string,
	last_name:	string,
};

export const UserBrief = (i: iUserBrief) => {
	const navigate = useNavigate();

	return (
		<div
			className={style.userbrief}
			onClick={() => navigate(`/profile/${i.uid}/`)}
		>
			<img
				className={style.avatar}
				src={i.image ? i.image : avatar}
				alt='avatar'
			/>
			<div className={style.wrapper}>
				<span className={style.credential}>
					{`${i.last_name} ${i.first_name}`}
				</span>
				<span className={style.nav}>
					Перейти в профиль
				</span>
			</div>
			<i className='fa fa-angle-right'></i>
		</div>
	);
};
