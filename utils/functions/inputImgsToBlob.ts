import { ImageInterface } from "../../redux/slices/formSlice";

export const inputImgsToBlob = (event: React.ChangeEvent<HTMLInputElement>): ImageInterface[] => {
    const imgs: ImageInterface[] = [];
    const reader = new FileReader();

    if (event.target.files) {
        for (let i: number = 0; i < event.target.files.length; i++) {
            imgs.push({
                filename: event.target.files[i].name,
                lastModified: event.target.files[i].lastModified,
                url: URL.createObjectURL(event.target.files[i]),
            });
        }
    }

    return imgs;
};

export default inputImgsToBlob;
