import { UserBrief } from 'components/UserBrief/UserBrief'
import style from './userbar.module.css'
import { useNavigate } from 'react-router-dom'
import { Button, ButtonVariant } from 'components/UI/Button/Button'
import { api, logout } from 'services/auth-service'
import { useEffect, useState } from 'react'

export const UserBar = () => {
    const [data, setData] = useState({})
    const navigate = useNavigate()

    function fetchData() {
        api.get('users/me/')
        .then((response) => {
            setData(response.data)
            console.log(response.data)
        }).catch((e) =>{
            console.log(e)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    const onLogout = (e) => {
		e.preventDefault();
		logout();
		window.location.reload();
	}


    return(
        <div className={style.userBar}>
            <UserBrief 
                onClick={() => navigate('/user')}
                width='200px'
                height='100px'
                background={data['cover']}
            >
                {data['username']}
            </UserBrief>
            <div className={style.userBarNav}>
                <Button 
                    onClick={() => navigate('/my-resume')}
                    disabled={false}
                    variant={ButtonVariant.userbar}
                >
                    Мои резюме
                </Button>
                <Button 
                    onClick={() => navigate('/my-teams')}
                    disabled={false}
                    variant={ButtonVariant.userbar}
                >
                    Мои команды
                </Button>
                <Button 
                    onClick={onLogout}
                    disabled={false}
                    variant={ButtonVariant.userbar}
                >
                    Выйти
                </Button>
            </div>

        </div>
    )
}