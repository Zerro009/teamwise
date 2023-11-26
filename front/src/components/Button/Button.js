import style from './button.module.scss';

export interface iButton {
	children:	Object,
	width:		number,
	height:		number,
	color:		string,
	background:	string,
	onClick:	void,
};

export const Button = (i: iButton) => {
	const customStyle = {
		width:	i.width || 'fit-content',
		height:	i.height || 'fit-content',
		color:	i.color || '#c6c6c6',
		background: i.background || 'rgba(198, 198, 198, 0.2)'
	};

	const handleClick = (e) => {
		e.preventDefault();
		i.onClick();
	}

	return (
		(i.onClick) &&
		<button
			style={customStyle}
			className={style.button}
			onClick={handleClick}
		>
			{i.children}
		</button>
	)
};
