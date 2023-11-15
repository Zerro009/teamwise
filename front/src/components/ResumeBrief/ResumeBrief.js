import style from './resumebrief.module.scss';

export const ResumeBrief = (props) => {
    console.log(props);
    return(
        <button className={style.briefBtn}>
            <img className={style.briefImg} src={props.user.image} />
            <div>
                {props.name}
            </div>
            <i className='fa fa-eye'></i>
            <div className={style.views}>
                {props.views}
            </div>
        </button>

    )
}