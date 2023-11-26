import { useState, useEffect } from 'react';
import { api } from 'services/auth-service.js';

import style from './userbrief.module.scss';

export interface iUserBrief {
	user:	Object
};

export const UserBrief = (i: iUserBrief) => {
	return (
		<div
			className={style.userbrief}
		>
			{(i.user ? i.user.photo : undefined) &&
			<img
				className={style.avatar}
				src={i.user.photo.thumbs['180']}
			/>
			}
			<div
				className={style.credentials}
			>
				{(i.user) &&
				<span>
					{i.user.lastName + ' ' + i.user.firstName}
				</span>
				}
				<span>
					Роль
				</span>
			</div>
			<i className='fa fa-arrow-right'></i>
		</div>
	);
};
