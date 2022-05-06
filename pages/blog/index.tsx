import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../../components/page-layout";
import styles from "./Index.module.scss";

const Blog: NextPage = () => {
    return (
        <PageLayout>
            <Head>
                <title>Webstout Blog - Blog</title>
                <meta name="Home" content="Homescreen of blog" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <main className={styles["main"]}></main>
        </PageLayout>
    );
};

export default Blog;
