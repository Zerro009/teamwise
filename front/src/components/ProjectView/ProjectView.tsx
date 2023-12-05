import classes from "./projectView.module.css"

export const ProjectView = (props) => {
	return (
		<div className={classes.projectView}>
            <div className={classes.projectView__title}>{props.title}</div>
            <div className={classes.projectView__properties}>
                <div className={classes.projectView__pr}>Team: {props.team}</div>
                <div className={classes.projectView__pr}>Role: {props.role}</div>
                <div className={classes.projectView__pr}>Role: {props.role}</div>
                <div className={classes.projectView__pr}>Role: {props.role}</div>
                <div className={classes.projectView__pr}>Role: {props.role}</div>
            </div>
		</div>
	)
}