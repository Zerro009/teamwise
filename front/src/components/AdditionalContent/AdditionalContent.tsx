import { Children } from "react"
import classes from "./additionalContent.module.css"

export const AdditionalContent = (props) => {
   
    const bg = "background-image: " + props.bg + ";";
	return (
		<div className={[classes.additionalContent, bg].join(" ")}>
            {props.children}
		</div>
	)
}