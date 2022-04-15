import React from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import store from "../redux/store";

const firebaseConfig = {
    apiKey: "AIzaSyB4-1AfpcZ5wo2jk9wA-tdhzc49x8MQMHg",
    authDomain: "webstout-blog.firebaseapp.com",
    databaseURL: "https://webstout-blog-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "webstout-blog",
    storageBucket: "gs://webstout-blog.appspot.com/",
    messagingSenderId: "621119557656",
    appId: "1:621119557656:web:8d5ce468941a14957f736d",
    measurementId: "G-RMRV5BSGWT",
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
