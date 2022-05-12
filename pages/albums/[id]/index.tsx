import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../../../components/page-layout";
import styles from "./Index.module.scss";
import Photos from "../../../components/perfectGrid";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../redux/store";
import { useEffect, useState } from "react";
import RollerText from "../../../components/roller-text";
import { AlbumInterface, setAlbum } from "../../../redux/slices/albumSlice";
import getImageUrls from "../../../utils/firebase/functions/getImageUrls";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { FirebaseEnum } from "../../../utils/enums/firebase";
import getImageUrl from "../../../utils/firebase/functions/getImageUrl";
import PerfectGrid from "../../../components/perfectGrid";
import Navigation from "../../../components/navigation";

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
     * Check if a album exists and call right function
     * Also triggers if we are loading
     *
     * @returns void
     */
    const checkAndSetAlbum = async () => {
        if (id === undefined) return;
        setLoading(true);

        const albumIndex = albums.findIndex(a => a.id === id);
        let a: AlbumInterface | undefined = undefined;

        if (albumIndex === -1) {
            const docId: string = Array.isArray(id) ? id[0] : id;
            a = await getAlbum(docId);
        } else {
            a = await setAlbumImgUrls(albumIndex);
        }

        if (a !== undefined) dispatch(setAlbum(a));

        setLoading(false);
    };

    /**
     * Searches for document on firebase.
     * If doc not found returns undefined.
     * If album exists get the full image url as well
     *
     * @param docId Document id from url
     * @returns Album or undefined if not found
     */
    const getAlbum = async (docId: string): Promise<AlbumInterface | undefined> => {
        const firestore = getFirestore();
        const docSnap = await getDoc(doc(firestore, FirebaseEnum.albums, docId));

        // Means doc does no exist in firestore
        if (!docSnap.exists()) return undefined;

        const a: AlbumInterface = docSnap.data() as AlbumInterface;
        const urls = await getImageUrls(a.images);
        a.banner = await getImageUrl(a.banner);
        a.images = a.images.map((img, index) => (img = urls[index]));

        return a;
    };

    /**
     * Creates Complete album from existing album
     *
     * @param albumIndex Index of the album from array
     * @returns Complete Album
     */
    const setAlbumImgUrls = async (albumIndex: number): Promise<AlbumInterface> => {
        const a: AlbumInterface = { ...albums[albumIndex] };

        const urls = await getImageUrls(a.images);
        a.images = a.images.map((img, index) => (img = urls[index]));

        return a;
    };

    return (
        <div>
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

            <Navigation />
            {loading && <RollerText text="Retrieving images from album" />}
            {!loading && album && <PerfectGrid albumName={album.title} images={album.images} />}
        </div>
    );
};

export default Album;
