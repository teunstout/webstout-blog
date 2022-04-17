import React from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import { initializeApp } from "firebase/app";
import clientCredentials from "../utils/firebase/clientCredentials";
import Authentication from "../components/elements/auth";

function MyApp({ Component, pageProps }: AppProps) {
    initializeApp(clientCredentials);

    return (
        <Provider store={store}>
            <Authentication>
                <div className="background">
                    <Component {...pageProps} />
                </div>
            </Authentication>
        </Provider>
    );
}

export default MyApp;
