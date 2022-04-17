import type { NextPage } from "next";
import Head from "next/head";
import Button from "../../components/elements/button";
import PageLayout from "../../components/page-layout";
import PhotoCard from "../../components/photo-card";
import styles from "./Index.module.scss";
import {
    addAlbums,
    setStartedFrom,
    AlbumInterface,
    setLoading,
    setNoMoreAlbums,
} from "../../redux/slices/albumSlice";
import { useEffect } from "react";
import { getFirestore, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import RollerText from "../../components/roller-text";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../redux/store";
import { getAlbumsPagination } from "../../utils/firebase/querys";

const Albums: NextPage = () => {
    const dispatch = useDispatch();
    const { loading, albums, startFrom, noMoreAlbums } = useSelector(
        (state: StoreState) => state.albums
    );
    const { admin } = useSelector((state: StoreState) => state.user);

    useEffect(() => {
        getAlbums(true);
    }, []);

    const getAlbums = async (initial: boolean) => {
        if (noMoreAlbums || loading) return;
        dispatch(setLoading(true));
        dispatch(addAlbums(await setAlbumsBannerImage(await getAlbumsStartAt(initial))));
        dispatch(setLoading(false));
    };

    const getAlbumsStartAt = async (initial: boolean): Promise<AlbumInterface[]> => {
        const firestore = getFirestore();
        const ab: AlbumInterface[] = [];

        const albumsSnapshots = await getDocs(
            getAlbumsPagination(firestore, initial ? 3 : 6, startFrom)
        );

        if (albumsSnapshots.empty) {
            dispatch(setNoMoreAlbums(true));
        } else {
            albumsSnapshots.forEach(album => {
                dispatch(setStartedFrom(album.data()));
                ab.push(album.data() as AlbumInterface);
            });
        }

        return ab;
    };

    const setAlbumsBannerImage = async (albums: AlbumInterface[]): Promise<AlbumInterface[]> => {
        const storage = getStorage();

        const promises: Promise<string>[] = albums.map((album: AlbumInterface) =>
            getDownloadURL(ref(storage, `${album.banner}`))
        );

        const results = await Promise.allSettled(promises);

        results.forEach((promiseUrl: PromiseSettledResult<string>, index: number) => {
            if (promiseUrl.status !== "fulfilled") return;
            albums[index].banner = promiseUrl.value;
        });

        return albums;
    };

    return (
        <PageLayout>
            <main className={styles["main"]}>
                <Head>
                    <title>Webstout Blog - Photo Albums</title>
                    <meta name="Home" content="Homescreen of blog" />
                    <link rel="icon" href="/logo.svg" />
                </Head>

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

                {loading && <RollerText text="Loading the albums" />}

                <section className={styles["main-buttons"]}>
                    {admin && (
                        <Button className={styles["main-button"]} href="/upload">
                            Upload
                        </Button>
                    )}

                    {loading && noMoreAlbums && albums && albums.length > 3 && (
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
