import { Modal, ModalVariant } from "components/UI/Modal/Modal"
import { Auth } from "components/Auth/Auth"
import style from './startingpage.module.css';


export const StartingPage = () => {
    return(
        <div className={style.startingPage}>
            <Modal 
                variant={ModalVariant.login}
            >
                <div>
                    <Auth/>
                </div>
            </Modal>
        </div>
    )
}