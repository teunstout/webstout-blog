import { FirebaseStorage, getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { ImageInterface, UploadFormInterface } from "../../redux/slices/formSlice";
import { PathsEnum } from "../enums/paths";
import dateToLocalDate from "./dateToLocalDate";
import { FirebaseEnum } from "../enums/firebase";
import getImageUrl from "../firebase/functions/getImageUrl";
import getImageUrls from "../firebase/functions/getImageUrls";

export interface UploadAlbumInterface extends AlbumImageInterface {
    title: string;
    subtitle: string;
    startDate: string;
    endDate: string;
}

interface AlbumImageInterface {
    images: string[];
    banner: string;
}

interface UploadPromisesInterface {
    promises: Promise<string>[];
    bannerIndex: number;
}

/**
 * Has a single instance of storage that is passed around
 * @param form
 * @returns Photo and Banner full path url
 */
const uploadPhotos = async (form: UploadFormInterface): Promise<AlbumImageInterface> => {
    const storage = getStorage();
    return await resultsUploadPromises(createUploadPromises(form, storage));
};

/**
 *
 * @param promises promises needed for Promise.allSettled
 * @param bannerIndex index where banner is needed
 * @returns Photo and Banner full path url
 */
const resultsUploadPromises = async ({
    promises,
    bannerIndex,
}: UploadPromisesInterface): Promise<AlbumImageInterface> => {
    let banner: string = "";
    const promRes = await Promise.allSettled(promises);

    const filtPromRes = promRes.filter((result, index) => {
        const fulfilled: boolean = result.status === "fulfilled";
        if (index === bannerIndex && fulfilled)
            banner = (result as PromiseFulfilledResult<string>).value;
        return fulfilled;
    });

    const results = filtPromRes.map(filtRes => (filtRes as PromiseFulfilledResult<string>).value);

    console.info("!--Photo's uploaded--!");

    return { images: results, banner };
};

/**
 * Create all promises and also checks which index is the index of the banner.
 * We do this so we don't upload a photo twice and use extra storage.
 * 
 * @param form
 * @param storage single instance of firebase storage
 * @returns promises & index of banner
 */
const createUploadPromises = (
    form: UploadFormInterface,
    storage: FirebaseStorage
): UploadPromisesInterface => {
    let bannerIndex: number = 0;

    const promises = form.images.map((photo, index) => {
        if (photo.filename === form.banner.filename) bannerIndex = index;
        return uploadPhoto(photo, form.title, storage);
    });

    return { promises, bannerIndex };
};

/**
 * Fetches blob, upload photo to firebase storage.
 * Removes object made from blob to prevent memory leak
 * 
 * @param photo filename & blob url
 * @param title album title
 * @param storage single instance of firebase storage
 * @returns relative path in firestore
 */
const uploadPhoto = async (
    photo: ImageInterface,
    title: string,
    storage: FirebaseStorage
): Promise<string> => {
    const storageRef = ref(storage, `${PathsEnum.album}/${title}/${photo.filename.toLowerCase()}`);
    const blob = await fetch(photo.url).then(r => r.blob());
    const fullPath = await uploadBytes(storageRef, blob);

    URL.revokeObjectURL(photo.url);

    return fullPath.metadata.fullPath;
};

/**
 * Upload Album to firebase
 * 
 * @param form
 */
const uploadAlbum = async (form: UploadFormInterface) => {
    const firestore = getFirestore();
    const { banner, images } = await uploadPhotos(form);

    try {
        await addDoc(collection(firestore, FirebaseEnum.albums), {
            title: form.title,
            subtitle: form.subtitle,
            startDate: form.startDate,
            endDate: form.endDate,
            images: await getImageUrls(images),
            banner: await getImageUrl(banner),
            createdAt: dateToLocalDate(new Date(Date.now())),
        });
        console.info("!--Album uploaded--!");
    } catch (e) {
        console.error(e);
    }
};

export default uploadAlbum;
