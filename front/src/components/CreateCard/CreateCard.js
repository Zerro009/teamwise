import style from './createcard.module.scss';

export interface iCreateCard {
	children:	Object,
};

export const CreateCard = (i: iCreateCard) => {
	return (
		<div className={style.createcard}>
			<i className='fa fa-plus'></i>
			<span className={style.text}>
				{i.children}
			</span>
		</div>
	);
};
