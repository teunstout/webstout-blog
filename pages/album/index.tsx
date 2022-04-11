import type { NextPage } from "next";
import Head from "next/head";
import Button from "../../components/elements/button";
import PageLayout from "../../components/page-layout";
import PhotoCard from "../../components/photo-card";
import styles from "./Index.module.scss";

const Album: NextPage = () => {
    return (
        <PageLayout img="/img/sweden-panorama.jpeg">
            <main className={styles["main"]}>
                <Head>
                    <title>Webstout Blog - Photo Albums</title>
                    <meta name="Home" content="Homescreen of blog" />
                    <link rel="icon" href="/logo.svg" />
                </Head>

                <section>
                    <header className={styles["main-header"]}>
                        <h1>Albums</h1>
                        <p>Photos & videos created and shot by me</p>
                    </header>

                    <div className={styles["main-photo-cards"]}>
                        <PhotoCard
                            image={`https://media.istockphoto.com/photos/stockholm-sweden-scenic-summer-sunset-view-with-colorful-sky-of-the-picture-id1132919653?k=20&m=1132919653&s=612x612&w=0&h=ABPX9bU-0VpqjV6_5y0BjpJo_Sz2gLOYf-JKtjKa34U=`}
                            title="Sweden stockholm"
                            subTitle="School trip stockholm"
                        />
                        <PhotoCard
                            image={`https://media.istockphoto.com/photos/stockholm-sweden-scenic-summer-sunset-view-with-colorful-sky-of-the-picture-id1132919653?k=20&m=1132919653&s=612x612&w=0&h=ABPX9bU-0VpqjV6_5y0BjpJo_Sz2gLOYf-JKtjKa34U=`}
                            title="Sweden stockholm"
                            subTitle="School trip stockholm"
                        />
                        <PhotoCard
                            image={`https://media.istockphoto.com/photos/stockholm-sweden-scenic-summer-sunset-view-with-colorful-sky-of-the-picture-id1132919653?k=20&m=1132919653&s=612x612&w=0&h=ABPX9bU-0VpqjV6_5y0BjpJo_Sz2gLOYf-JKtjKa34U=`}
                            title="Sweden stockholm"
                            subTitle="School trip stockholm"
                        />
                    </div>

                    <Button className={styles["main-button"]}>Load More</Button>
                </section>
            </main>
        </PageLayout>
    );
};

export default Album;
