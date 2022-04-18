import { getDownloadURL, getStorage, ref } from "firebase/storage";

/**
 * Gets a relative image and turns it into a retrievable image url.
 *
 * @param image string relative image ex(/image/image.jpg)
 * @returns full url
 */
export default async function getImageUrl(image: string): Promise<string> {
    const storage = getStorage();

    return await getDownloadURL(ref(storage, image));
}
