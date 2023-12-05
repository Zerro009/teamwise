import {Route, Routes} from "react-router-dom";
import { UserNamePage } from "pages/UserNamePage/UserNamePage";
import { StartingPage } from "pages/StartingPage/StartingPage";
import { MainPage } from "pages/MainPage/MainPage";
import { getAccessToken } from "../services/auth-service" 
import { MessengerPage } from "pages/MessengerPage/MessengerPage";
import { NotificationsPage } from "pages/NotificationsPage/NotificationsPage";
import { MyResumePage } from "pages/MyResumePage/MyResumePage";
import { MyTeamsPage } from "pages/MyTeamsPage/MyTeamsPage";

export const AppRouter = () =>{
    return (
        <Routes>
            <Route path="/main" element={<MainPage />}/>
            <Route path="/" element={<StartingPage />}/>  
            <Route path="/username" element={<UserNamePage />}/>
            <Route path="/messenger" element={<MessengerPage />}/>
            <Route path="/notifications" element={<NotificationsPage />}/>
            <Route path="/my-resume" element={<MyResumePage />}/>
            <Route path="/my-teams" element={<MyTeamsPage />}/>
        </Routes>
    )
}