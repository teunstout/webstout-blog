import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import FormUpload from "../../components/form/upload";
import PageLayout from "../../components/page-layout";
import styles from "./Index.module.scss";
import FormPhotos from "../../components/form/photos";
import { useSelector } from "react-redux";
import { StoreState } from "../../utils/redux/store";

const Upload: NextPage = () => {
    const [showPhotos, setShowPhotos] = useState<boolean>(false);
    const { banner } = useSelector((state: StoreState) => state.uploadForm);

    return (
        <PageLayout className={styles["layout"]} img={banner}>
            <main className={styles["main"]}>
                <Head>
                    <title>Webstout Blog - Upload</title>
                    <meta name="Home" content="Homescreen of blog" />
                    <link rel="icon" href="/logo.svg" />
                </Head>
                {showPhotos ? (
                    <FormPhotos
                        previousStep={() => {
                            setShowPhotos(false);
                        }}
                    />
                ) : (
                    <FormUpload nextStep={() => setShowPhotos(true)} />
                )}
            </main>
        </PageLayout>
    );
};

export default Upload;