import style from './mynavbtn.module.scss'
export const MyNavBtn = (props) => {
    return(
        <button className={style.mynavbtn} onClick = {props.onClick}>
            <i className={props.icon}></i>
            {props.text}
        </button>
    )
}