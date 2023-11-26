import style from './mynav.module.scss';
import { useState } from 'react';
import { MyNavMenu } from 'components/MyNavMenu/MyNavMenu';
export const MyNav = () => {

	const [menuActive, setMenuActive] = useState(false);
	
	return(
		<div>
			<nav className={style.navm}>
				<div className={style.navbtn} onClick={() => {setMenuActive(!menuActive)} }>
				</div>
			</nav>
			<MyNavMenu active={menuActive} setActive={() => setMenuActive(!menuActive)}/>
		</div>
	)
}
