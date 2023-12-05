import { PropsWithChildren } from 'react';

interface UserBriefProps{
    background: string;
    onClick: () => void;
    width: string;
    height: string;
}

export const UserBrief: React.FC<PropsWithChildren<UserBriefProps>> = ({
    background,
    width,
    height,
    onClick,
    children
}) => {

    return(
        <button
            onClick={onClick}
            style={{width,height,background}}
            
        >
           {children} 
        </button>
    )
}