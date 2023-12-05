
import style from './input.module.css'

export enum InputVariant{
    login = 'login',
    resume = 'resume',
    team = 'team'
}

interface InputProps {
    onChange: () => void,
    variant: InputVariant,
    placeholder: string,
    type: string,
    value: string,
}

export const Input: React.FC<React.PropsWithChildren<InputProps>> = ({
    onChange,
    variant,
    placeholder,
    value,
    type,
    children,
}) => {
    return (
        <input 
            className={
                (variant === InputVariant.login)
                ? style.loginInput
                : (variant === InputVariant.resume)
                ? style.resumeInput 
                : style.teamInput
            }
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            type={type}
        >
            {children}
        </input>
    )
}