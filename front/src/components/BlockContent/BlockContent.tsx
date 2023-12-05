import classes from "./blockContent.module.css"

export const BlockContent = (props) => {
	return (
		<div className={classes.blockContent}>
            <div className={classes.blockContent__count}>{props.count}</div>
            <div className={classes.blockContent__text}>{props.text}</div>
		</div>
	)
}