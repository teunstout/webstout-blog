import React from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import store from "../redux/store";

const firebaseConfig = {

};

function MyApp({ Component, pageProps }: AppProps) {
    const app = initializeApp(firebaseConfig);

    return (
        <Provider store={store}>
            <div className="background">
                <Component {...pageProps} />
            </div>
        </Provider>
    );
}

export default MyApp;
