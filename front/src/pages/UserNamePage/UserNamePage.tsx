import { Input, InputVariant } from "components/UI/Input/Input"
import { useInput } from 'hooks/useInput'
import style from './usernamepage.module.css'
import { Button, ButtonVariant } from "components/UI/Button/Button"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from 'services/auth-service'

export const UserNamePage = () => {
    const navigate = useNavigate();
    

    function handleSubmit(){
        const data = {username: username.value}
        api.patch('users/', data)
        .then((response) =>{
            console.log(response.data)
            response.status === 200 
                ? navigate('/main')
                : navigate('/username')
        }).catch((e) =>{
            console.log(e)
        })
    }
    
    

    const username = useInput('')

    return(  
                <div className={style.usernamePage}>
                    <Input
                        placeholder={'Введите username'}
                        type = {'text'}
                        value = {username.value}
                        onChange={username.onChange}
                        variant={InputVariant.login}
                    >
                    </Input>
                    <Button 
                        onClick={handleSubmit} 
                        variant={ButtonVariant.login}
                        disabled={false}
                    >
                        Создать
                    </Button>
                </div>
        
    )
}