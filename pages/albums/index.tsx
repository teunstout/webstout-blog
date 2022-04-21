import type { NextPage } from "next";
import Head from "next/head";
import Button from "../../components/elements/button";
import PageLayout from "../../components/page-layout";
import PhotoCard from "../../components/photo-card";
import styles from "./Index.module.scss";
import {
    addAlbums,
    setStartedFrom,
    setLoading,
    setNoMoreAlbums,
} from "../../redux/slices/albumsSlice";
import { useEffect } from "react";
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
    const { loading, data, startFrom, noMoreAlbums } = useSelector(
        (state: StoreState) => state.albums
    );

    useEffect(() => {
        getAlbums(!!startFrom);

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
    const getAlbums = async (initial: boolean) => {
        if (noMoreAlbums || loading) return;
        dispatch(setLoading(true));
        dispatch(addAlbums(await getAlbumsStartAt(initial)));
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
    const getAlbumsStartAt = async (initial: boolean): Promise<AlbumInterface[]> => {
        const firestore = getFirestore();
        const ab: AlbumInterface[] = [];

        const albumsSnapshots = await getDocs(
            getAlbumsQuery(firestore, initial ? 3 : 6, startFrom)
        );

        if (albumsSnapshots.empty) {
            dispatch(setNoMoreAlbums(true));
        } else {
            albumsSnapshots.forEach(album => {
                dispatch(setStartedFrom(album.data() as AlbumInterface));
                ab.push({
                    ...(album.data() as AlbumInterface),
                    id: album.id,
                });
            });
        }

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

                <section className={styles["main-buttons"]}>
                    {admin && (
                        <Button className={styles["main-button"]} href="/upload">
                            Upload
                        </Button>
                    )}

                    {loading && noMoreAlbums && data && data.length > 3 && (
                        <Button
                            className={styles["main-button"]}
                            onClick={() => getAlbums(false)}
                            disabled={loading || noMoreAlbums}>
                            Load More
                        </Button>
                    )}
                </section>
            </main>
        </PageLayout>
    );
};

export default Albums;
