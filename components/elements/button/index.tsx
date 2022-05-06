import React from "react";
import styles from "./Index.module.scss";

interface ButtonInterface extends React.HTMLProps<HTMLAnchorElement> {
    disabled?: boolean;
}

const Button = (props: ButtonInterface) => {
    return (
        <a
            {...props}
            className={`
			${styles["button"]} 
			${props.disabled ? styles["disabled"] : ""}
			${props.className ? props.className : ""}
			`}
        ></a>
    );
};

export default Button;
