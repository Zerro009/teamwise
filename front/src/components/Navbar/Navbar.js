import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	FaDiscord,
	FaYoutube,
	FaVk,
	FaBrowser,
} from 'react-icons/fa';
import { NavbarButton } from '../NavbarButton/NavbarButton.js';

import style from './navbar.module.scss';

export const Navbar = () => {
	const navigate = useNavigate();

	return (
		<div className={style.navbar}>
			<span className={style.header}>
				HEADHUNTER
			</span>
			<nav className={style.content}>
				<NavbarButton
					icon='fa fa-home'
					children='Главная'
					route='/'
				/>
				<NavbarButton
					icon='fa fa-file'
					children='Резюме'
					route='/resume/'
				/>
				<NavbarButton
					icon='fa fa-diagram-project'
					children='Проекты'
					route='/project/'
				/>
			</nav>
			<hr />
			<div className={style.footer}>
				<a className={style.discord} href='https://discord.com/invite/uV3YRnq2J4'>
					<FaDiscord />
				</a>
				<a className={style.youtube} href='https://www.youtube.com/@ai4ti'>
					<FaYoutube />
				</a>
				<a className={style.vk} href='https://vk.com/ai4ti'>
					<FaVk />
				</a>
			</div>
		</div>
	);
};
