import { PropsWithChildren } from 'react';

export interface ButtonProps {
	onClick:	any,
	width:		string,
	height:		string,
	disabled:	boolean,
};

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
	width,
	height,
	onClick,
	disabled,
	children
	}) => {
		
		return (
			<button style = {{
				width: width, height: width
			}}
			disabled={disabled}
			onClick={onClick}
			>
			{children}
			</button>
	);
};
