import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import PageLayout from "../../components/page-layout";
import styles from "./Index.module.scss";
import { useSelector } from "react-redux";
import { StoreState } from "../../redux/store";
import Form from "../../components/form";
import FormPhotos from "../../components/form-photos";

const Upload: NextPage = () => {
    const [showPhotos, setShowPhotos] = useState<boolean>(false);
    const form = useSelector((state: StoreState) => state.uploadForm);
    const { admin } = useSelector((state: StoreState) => state.user);

    return (
        <PageLayout
            className={styles["layout"]}
            img={form.banner.url !== "" ? form.banner.url : undefined}>
            <Head>
                <title>Webstout Blog - Upload</title>
                <meta name="Upload Albums" content="Upload albums to the firebase storage" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <main className={styles["main"]}>
                {admin && showPhotos && <FormPhotos form={form} setShowPhotos={setShowPhotos} />}
                {admin && !showPhotos && <Form form={form} nextStep={() => setShowPhotos(true)} />}
            </main>
        </PageLayout>
    );
};

export default Upload;
