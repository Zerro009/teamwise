import style from './header.module.css'
import GM from 'assets/GM.svg';
import { Button, ButtonVariant } from 'components/UI/Button/Button';

import { FaRegMessage } from "react-icons/fa6";
import { RiNotification2Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate()


	return (
		<div className={style.header}>
				<Button
					onClick={() => navigate('/main')}
					disabled={false}
					variant={ButtonVariant.header}
				>
					<img src={GM} />
				</Button>
				<div className={style.rightHeader}>
					<div className={style.leftRightHeader}>
						<Button 
							onClick={() => navigate('/messenger')} 
							disabled={false}
							variant={ButtonVariant.header}
						>
							<FaRegMessage className={style.icon}/>
						</Button>
						<Button 
							onClick={() => navigate('/notifications')}
							disabled={false}
							variant={ButtonVariant.header}
						>
							<RiNotification2Line className={style.icon}/>
						</Button>
					</div>
					<div>
						hhhhh
					</div>
				</div>
		</div>
	)
}


