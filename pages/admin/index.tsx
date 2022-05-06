import type { NextPage } from "next";
import styles from "./Index.module.scss";
import { getAuth, GithubAuthProvider } from "firebase/auth";
import { useCallback, useEffect } from "react";
import { getApp } from "firebase/app";
import "firebaseui/dist/firebaseui.css";
import firebaseui from "firebaseui";

const Admin: NextPage = () => {
    const firebaseClient = getApp();

    const config: firebaseui.auth.Config = {
        signInOptions: [new GithubAuthProvider().providerId],
        signInSuccessUrl: "/",
    };

    const loadFirebaseui = useCallback(async () => {
        const firebaseUi =
            firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(getAuth());
        firebaseUi.start("#firebaseui-auth-container", config);
    }, [firebaseClient, config]);

    useEffect(() => {
        loadFirebaseui();
    }, []);

    return (
        <main className={styles["container"]}>
            <div id="firebaseui-auth-container" />
        </main>
    );
};

export default Admin;
