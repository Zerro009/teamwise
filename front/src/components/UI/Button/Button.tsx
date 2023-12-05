import { PropsWithChildren } from 'react';
import style from './button.module.css'

export enum ButtonVariant{
	login = 'login',
	navigation = 'navigation',
	userbar = 'userbar',
	header = 'header'
}


export interface ButtonProps {
	onClick:	any,
	disabled:	boolean,
	variant: ButtonVariant
};

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
	onClick,
	variant,
	disabled,
	children
	}) => {
		
		return (
			<button 
			className={
				(variant === ButtonVariant.login)
				? style.loginBtn
				: (variant === ButtonVariant.navigation)
				? style.navigationBtn 
				: (variant === ButtonVariant.userbar)
				? style.userbarBtn
				: style.headerBtn
			}
			disabled={disabled}
			onClick={onClick}
			>
			{children}
			</button>
	);
};
