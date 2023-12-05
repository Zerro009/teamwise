import { Header } from "components/Header/Header"
import { useEffect } from "react"
import { getAccessToken } from 'services/auth-service'
import { useNavigate } from "react-router-dom"
import { UserBar } from "components/UserBar/UserBar"
import { BlockContent } from "components/BlockContent/BlockContent"
import { ProjectView } from "components/ProjectView/ProjectView"


export const MainPage = () => {

    const navigate = useNavigate()
    
    useEffect (() => {
        {getAccessToken() 
        ? navigate('/main')
        : navigate ('/')
        } 
    }, [getAccessToken()])

    return(
        <div>
            <Header />
            <UserBar />
        </div>
    )
}