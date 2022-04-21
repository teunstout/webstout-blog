import type { NextPage } from "next";
import Head from "next/head";
import Button from "../../components/elements/button";
import PageLayout from "../../components/page-layout";
import PhotoCard from "../../components/photo-card";
import styles from "./Index.module.scss";
import { addAlbums, setLastAlbum, setLoading, setMoreAlbums } from "../../redux/slices/albumsSlice";
import { useEffect, useState } from "react";
import { getFirestore, getDocs } from "firebase/firestore";
import RollerText from "../../components/roller-text";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../redux/store";
import Link from "next/link";
import { getAlbumsQuery } from "../../utils/firebase/querys/getAlbumsQuery";
import { AlbumInterface } from "../../redux/slices/albumSlice";

const Albums: NextPage = () => {
    const dispatch = useDispatch();
    const { admin } = useSelector((state: StoreState) => state.user);
    const { loading, data, lastAlbum, moreAlbums } = useSelector(
        (state: StoreState) => state.albums
    );

    useEffect(() => {
        getAlbums();

        // Return setLoading so that we won't end up in a infinite loop
        return () => {
            dispatch(setLoading(false));
        };
    }, []);

    /**
     * Get the albums and set the albums banner to a full url
     *
     * @param initial first time getting the albums
     * @returns void
     */
    const getAlbums = async () => {
        if (!moreAlbums || loading) return;
        dispatch(setLoading(true));
        dispatch(addAlbums(await getAlbumsStartAt()));
        dispatch(setLoading(false));
    };

    /**
     * Get the albums starting from a position.
     * Makes use of a query to enforce getting a few albums at the time.
     * Adds the document ids to albums so we can distinct them
     *
     * @param initial First time getting albums
     * @returns
     */
    const getAlbumsStartAt = async (): Promise<AlbumInterface[]> => {
        const ab: AlbumInterface[] = [];
        const albumsSnapshots = await getDocs(getAlbumsQuery(getFirestore(), 3, lastAlbum));
        dispatch(setMoreAlbums(!albumsSnapshots.empty));

        if (!albumsSnapshots.empty) {
            albumsSnapshots.forEach(album => {
                dispatch(setLastAlbum((album.data() as AlbumInterface).createdAt));
                ab.push({
                    ...(album.data() as AlbumInterface),
                    id: album.id,
                });
            });
        }

        console.log(ab);

        return ab;
    };

    return (
        <PageLayout>
            <Head>
                <title>Webstout Blog - Photo Albums</title>
                <meta name="Albums" content="All albums on this website" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <main className={styles["main"]}>
                <header className={styles["main-header"]}>
                    <h1>Albums</h1>
                    <p>Photos & videos created and shot by me</p>
                </header>

                <section className={styles["main-photo-cards"]}>
                    {data &&
                        data.map((album, index) => (
                            <Link key={index} href={`/albums/${album.id}`} passHref>
                                <a>
                                    <PhotoCard
                                        image={album.banner}
                                        title={album.title}
                                        subTitle={album.subtitle}
                                    />
                                </a>
                            </Link>
                        ))}
                </section>

                {loading && <RollerText text="Loading the albums" />}

                {!loading && (
                    <section className={styles["main-buttons"]}>
                        {moreAlbums && (
                            <Button
                                className={styles["main-button"]}
                                onClick={getAlbums}
                                disabled={loading || !moreAlbums}>
                                Load More
                            </Button>
                        )}

                        {admin && (
                            <Button className={styles["main-button"]} href="/upload">
                                Upload
                            </Button>
                        )}
                    </section>
                )}
            </main>
        </PageLayout>
    );
};

export default Albums;
