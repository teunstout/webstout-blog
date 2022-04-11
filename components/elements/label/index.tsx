import styles from "./Index.module.scss";

const Label = (props: React.HTMLProps<HTMLLabelElement>) => {
    // TODO: Check regex for weird inputs
    return (
        <label
            {...props}
            className={`${styles["label"]} ${props.className ? props.className : ""}`}
        />
    );
};

export default Label;
