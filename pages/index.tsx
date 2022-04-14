import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../components/page-layout";
import styles from "./Index.module.scss";
import { useEffect, useState } from "react";
import { ref, getDownloadURL, getStorage } from "firebase/storage";

const Home: NextPage = () => {
    const [url, setUrl] = useState<string>("/img/sweden-panorama.jpeg");
    const storage = getStorage();

    useEffect(() => {
        const storageRef = ref(storage, "/sweden-panorama.jpeg");
        getDownloadURL(storageRef)
            .then(res => {
                setUrl(res);
            })
            .catch(err => {
                console.warn(err);
            });
    }, [storage]);

    return (
        <PageLayout img={url}>
            <Head>
                <title>Webstout Blog - Welkom</title>
                <meta name="Home" content="Homescreen of blog" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <main className={styles["main"]}></main>
        </PageLayout>
    );
};

export default Home;
