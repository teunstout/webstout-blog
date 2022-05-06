import React from "react";
import styles from "./Index.module.scss";

interface SubHeaderInterface {
    title: string;
    subTitle: string;
}

const SubHeader = ({ title, subTitle }: SubHeaderInterface) => {
    return (
        <header className={styles["sub-header"]}>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </header>
    );
};

export default SubHeader;
