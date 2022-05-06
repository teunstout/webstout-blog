import React from "react";
import { ImageInterface } from "../../redux/slices/formSlice";

export const inputImgsToBlob = (event: React.ChangeEvent<HTMLInputElement>): ImageInterface[] => {
    const imgs: ImageInterface[] = [];

    if (event.target.files) {
        for (const file of Array.from(event.target.files)) {
            imgs.push({
                filename: file.name,
                lastModified: file.lastModified,
                url: URL.createObjectURL(file),
            });
        }
    }

    return imgs;
};

export default inputImgsToBlob;
