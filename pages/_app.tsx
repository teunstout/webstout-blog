import React from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import store from "../redux/store";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
};

function MyApp({ Component, pageProps }: AppProps) {
    const app = initializeApp(firebaseConfig);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
