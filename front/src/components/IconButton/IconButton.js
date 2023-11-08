import style from './iconbutton.module.scss';

export interface iIconButton {
	icon:		string,
	onClick:	void,
};

export const IconButton = (i: iIconButton) => {
	return (
		<button
			className={style.iconbtn}
			onClick={i.onClick}
		>
			<i className={i.icon}></i>
		</button>
	);
};
