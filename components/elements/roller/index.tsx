import styles from "./Index.module.scss";

const Roller = () => {
    return (
        <div className={styles["lds-roller"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Roller;
