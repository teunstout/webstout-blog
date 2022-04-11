import styles from "./Index.module.scss";

const Input = (props: React.HTMLProps<HTMLInputElement>) => {
    // TODO: Check regex for weird inputs
    return (
        <input
            {...props}
            className={`${styles["input"]} ${props.className ? props.className : ""}`}
        />
    );
};

export default Input;
