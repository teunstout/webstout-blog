import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../../../components/page-layout";
import styles from "./Index.module.scss";
import Photos from "../../../components/photos";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../redux/store";
import { useEffect, useState } from "react";
import RollerText from "../../../components/roller-text";
import { AlbumInterface, setAlbum } from "../../../redux/slices/albumSlice";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { FirebaseEnum } from "../../../utils/enums/firebase";
import SubHeader from "../../../components/sub-header";
import PhotoSlider from "../../../components/photo-slider";

const Album: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();
    const albums: AlbumInterface[] = useSelector((store: StoreState) => store.albums.data);
    const album: AlbumInterface = useSelector((store: StoreState) => store.album);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        checkAndSetAlbum();
    }, [id, albums]);

    /**
     * Set album to redux store if exists
     *
     * @returns void
     */
    const checkAndSetAlbum = async () => {
        setLoading(true);

        if (id && albums.findIndex(a => a.id === id) !== -1) {
            await getAlbum(Array.isArray(id) ? id[0] : id).then(res => dispatch(setAlbum(res)));
        }

        setLoading(false);
    };

    /**
     * Searches for document on firebase.
     *
     * @param docId Document id
     * @returns Album
     */
    const getAlbum = async (docId: string): Promise<AlbumInterface> => {
        const firestore = getFirestore();
        const docSnap = await getDoc(doc(firestore, FirebaseEnum.albums, docId));

        // Means doc does no exist in firestore
        if (!docSnap.exists()) throw new Error("No albums found");

        return docSnap.data() as AlbumInterface;
    };

    return (
        <PageLayout img={album && album.banner ? album.banner : undefined}>
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
                {!loading && <SubHeader title={album.title} subTitle={album.subtitle} />}

                {loading && <RollerText text="Retrieving images from album" />}

                {/* {!loading && album && <Photos albumName={album.title} images={album.images} />} */}
                {!loading && album && album.images.length > 5 && (
                    <PhotoSlider images={album.images} />
                )}
            </main>
        </PageLayout>
    );
};

export default Album;
