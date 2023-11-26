import style from './progressbar.module.scss';

export interface iProgressBar {
	progress:	number,
	width:		string,
	height:		string,
	color:		string,
	background:	string,
};

export const ProgressBar = (i: iProgressBar) => {
	const customStyle = {
		width:		i.width || '200px',
		height:		i.height || '40px',
		color:		i.color || 'white',
		background:	i.background || 'black',
	};

	return (
		<div
			style={customStyle}
			className={style.progressbar}
		>
			<div
				style={{background: i.color, width: `${i.progress}%`}}
				className={style.progress}
			>
			</div>
		</div>
	);
}
