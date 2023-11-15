import React from 'react';
import clsx from 'clsx';

import style from './modal.module.scss';

export const Modal = ({active, setActive, children, width, height})  => {
	const customSize = (width: number | undefined, height: number | undefined): React.CSSProperties | undefined => {
		if (height && width) {
			return {
				width:	width,
				height:	height
			};
		} else if (width) {
			return {
				width:	width,
			};
		} else if (height) {
			return {
				height:	height,
			};
		} else {
			return;
		}
	};

	return (
		<div
			className={active ? clsx(style.modal, style.active) : style.modal}
			onClick={() => setActive(false)}>
			<div
				style={customSize(width, height)}
				className={active ? clsx(style.content, style.active) : style.content}
				onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};
