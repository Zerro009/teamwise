import React from 'react';

import style from './button.module.scss';

export interface iButton {
	children:	Object,
	onClick:	void,
	width:		number,
	height:		number,
	disabled:	boolean,
};

export const Button = (i: iButton) => {
	const customSize = (width, height): React.CSSProperties => {
		if (width && height) {
			return {
				width:	width,
				height:	height
			};
		} else if (width) {
			return {
				width:	width
			};
		} else if (height) {
			return {
				height:	height
			};
		} else {
			return;
		}
	};

	return (
		<button
			style={customSize(i.width, i.height)}
			className={style.btn}
			onClick={i.onClick}
			disabled={i.disabled}
		>
			{i.children}
		</button>
	);
};
