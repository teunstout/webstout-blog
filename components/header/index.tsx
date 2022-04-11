import React from "react";
import Navigation from "../navigation";
import styles from "./Index.module.scss";

interface HeaderInterface {
    children?: React.ReactChild | React.ReactChild[];
}

const Header = ({ children }: HeaderInterface) => {
    return (
        <header className={styles["header"]}>
            <Navigation />
            {children}
        </header>
    );
};

export default Header;
