import { getDownloadURL, getStorage, ref } from "firebase/storage";

/**
 * Function that gets the firebase urls for images and returns them in order.
 * We make use of concurrently retrieving images.
 *
 * @param images Array of relative images ex(/image/image.jpg)
 * @returns array of strings in order
 */
export default async function getImageUrls(images: string[]): Promise<string[]> {
    const storage = getStorage();
    const urls: string[] = [];

    const promises: Promise<string>[] = images.map((image: string) =>
        getDownloadURL(ref(storage, image))
    );

    const results = await Promise.allSettled(promises);

    results.forEach((promiseUrl: PromiseSettledResult<string>) => {
        urls.push(promiseUrl.status === "fulfilled" ? promiseUrl.value : "");
    });

    return urls;
}
