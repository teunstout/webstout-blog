import { ImageInterface } from "../redux/slices/uploadFormSlice";

export const inputImgsToBlob = (event: React.ChangeEvent<HTMLInputElement>): ImageInterface[] => {
    const imgs: ImageInterface[] = [];

    if (event.target.files) {
        for (let i: number = 0; i < event.target.files.length; i++) {
            imgs.push({
                filename: event.target.files[i].name,
                url: URL.createObjectURL(event.target.files[i]),
            });
        }
    }

    return imgs;
};

export default inputImgsToBlob;
