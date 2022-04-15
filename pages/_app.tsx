import React, { useEffect } from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import { initializeApp } from "firebase/app";
import clientCredentials from "../utils/firebase/clientCredentials";

function MyApp({ Component, pageProps }: AppProps) {
    initializeApp(clientCredentials);

    return (
        <Provider store={store}>
            <div className="background">
                <Component {...pageProps} />
            </div>
        </Provider>
    );
}

export default MyApp;
