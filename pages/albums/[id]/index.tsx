import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../../../components/page-layout";
import styles from "./Index.module.scss";
import Photos from "../../../components/photos";
import { useRouter } from "next/router";
import { AlbumInterface } from "../../../redux/slices/albumSlice";
import { useSelector } from "react-redux";
import { StoreState } from "../../../redux/store";
import { useEffect, useState } from "react";
import RollerText from "../../../components/roller-text";

const Album: NextPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { id } = router.query;

    const album: AlbumInterface = useSelector(
        (store: StoreState) => store.albums.albums.filter(album => album.id !== id)[0]
    );

    useEffect(() => {
        if (id === undefined) return;
        setLoading(true);

        if (album) {
        } else {
            getAlbum();
        }
        setLoading(false);

        console.log(album);
    }, [album, id]);

    const getAlbum = () => {
        setAlbumImgUrls();
    };

    const setAlbumImgUrls = () => {};

    return (
        <PageLayout>
            <Head>
                <title>
                    Webstout Blog - {album && album.title ? album.title : "Album not found"}
                </title>
                <meta
                    name="Home"
                    content={`Photo album ${album && album.title ? album.title : "Not found"}`}
                />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <main className={styles["main"]}>
                {/* <h1>{album.title}</h1>
                <p>{album.subtitle}</p> */}
                {loading && <RollerText text="Retrieving images from album" />}
                {/* {!loading && album && <Photos albumName={album.title} images={album.image} />} */}
            </main>
        </PageLayout>
    );
};

export default Album;
