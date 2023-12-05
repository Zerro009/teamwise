import { PropsWithChildren } from 'react';
import style from './modal.module.css';

export enum ModalVariant{
    login = 'login',
    resume = 'resume',
    team = 'team',

}

interface ModalProps {
    variant: ModalVariant,
}

export const Modal: React.FC<React.PropsWithChildren<ModalProps>> = (
        {
            variant,
            children,  
    }) => {

        return(
            <div 
            className={
                (variant === ModalVariant.login)
                ? style.loginModal
                : (variant === ModalVariant.resume)
                ? style.resumeModal
                : style.teamModal 
            }
            >
                {children}
            </div>
        )
}