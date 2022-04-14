import type { NextPage } from "next";
import Head from "next/head";
import Button from "../../components/elements/button";
import PageLayout from "../../components/page-layout";
import PhotoCard from "../../components/photo-card";
import styles from "./Index.module.scss";
import { getStorage, ref as refStorage, getDownloadURL } from "firebase/storage";
import { getDatabase, onValue, ref as refDatabase } from "firebase/database";
import { PathsEnum } from "../../utils/enums/paths";
import { AlbumInterface } from "../../redux/slices/albumSlice";
import { useEffect, useState } from "react";

const Album: NextPage = () => {
    const database = getDatabase();
    const storage = getStorage();
    const databaseRef = refDatabase(database, `/${PathsEnum.album}`);
    const [albums, setAlbums] = useState<AlbumInterface[]>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        onValue(databaseRef, async snapshot => {
            if (!snapshot.exists) return;
            const albumObjects: AlbumInterface[] = Object.values(snapshot.val());

            const albumPromises: Promise<AlbumInterface>[] = albumObjects.map(async album => {
                const storageRef = refStorage(storage, `${album.banner}`);
                album.banner = await getDownloadURL(storageRef);
                return album;
            });

            const albumResults = await Promise.allSettled(albumPromises);
            const albums: AlbumInterface[] = [];

            albumResults.forEach(album => {
                if (album.status !== "fulfilled") return;
                albums.push((album as PromiseFulfilledResult<AlbumInterface>).value);
            });
            setAlbums(albums);
        });
        setLoading(false);
    }, []);

    return (
        <PageLayout>
            <Head>
                <title>Webstout Blog - Photo Albums</title>
                <meta name="Home" content="Homescreen of blog" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <main className={styles["main"]}>
                <header className={styles["main-header"]}>
                    <h1>Albums</h1>
                    <p>Photos & videos created and shot by me</p>
                </header>

                <section className={styles["main-photo-cards"]}>
                    {albums &&
                        albums.map((album, index) => (
                            <PhotoCard
                                key={index}
                                image={album.banner}
                                title={album.title}
                                subTitle={album.subtitle}
                            />
                        ))}
                </section>

                <Button className={styles["main-button"]}>Load More</Button>
            </main>
        </PageLayout>
    );
};

export default Album;
