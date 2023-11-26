import { MyNavBtn } from "components/MyNavBtn/MyNavBtn";
import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import { logout } from "services/auth-service.js";
import { UserBrief } from 'components/UserBrief/UserBrief';
import { api } from 'services/auth-service.js';


import style from './mynavmenu.module.scss';


export const MyNavMenu = ({active, setActive}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState()

    useEffect(() => {
        api.get('users/me/')
            .then((response) => {
                setUser(response.data);
            }).catch(error => {
                console.log(error);
            });
    }, []);
    
    const onLogout = () => {
        logout()
        window.location.reload()
    }

    return (
        <div className={active ? `${style.mynavmenu} ${style.active}` : style.mynavmenu}>
            {(user) && <UserBrief user={user} />}
            <MyNavBtn 
                icon='fa fa-file'
                text="Мои резюме"
                onClick={() => navigate('/my-resume/')}   />
            <MyNavBtn
                icon='fa fa-users'
                text="Мои команды"
                onClick={() => navigate('/my-teams/')}
            />
            <MyNavBtn
                icon='fa fa-arrow-right-from-bracket'
                text="Выход"
                onClick={onLogout}
            />
        </div>
    )
}
