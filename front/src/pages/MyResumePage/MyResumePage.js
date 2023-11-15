import { useState } from 'react';
import { Button } from '../../components/Button/Button.js';
import { Modal } from '../../components/Modal/Modal.js';

import style from './myresumepage.module.scss';

export const MyResumePage = () => {
	const [modal, setModal] = useState(false);

	return (
		<div className={style.myresumepage}>
			<h1 className={style.header}>
				Мои резюме
			</h1>
			<Button
				children='Создать'
				onClick={() => setModal(true)}
			/>
			<Modal
				width='400px'
				height='200px'
				active={modal}
				setActive={setModal}
			/>
		</div>
	);
};
