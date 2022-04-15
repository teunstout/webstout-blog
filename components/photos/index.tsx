import Image from "next/image";
import { useState } from "react";
import styles from "./Index.module.scss";

interface PhotosInterface {
    albumName: string;
    images: string[];
    onSelect?: (index: number) => void;
}

const Photos = ({ images, albumName, onSelect }: PhotosInterface) => {
    const [selected, setSelected] = useState<string>("");

    const setSelectedImage = (image: string, index: number) => {
        if (!onSelect) return;
        onSelect(index);
        setSelected(image);
    };

    return (
        <section className={styles["photo-grid"]}>
            {images.map((image: string, index: number) => (
                <a
                    key={index}
                    onClick={onSelect ? () => setSelectedImage(image, index) : undefined}
                    className={`${styles["photo-wrapper"]} 
                    ${onSelect ? styles["photo-select"] : ""} 
                    ${selected === image ? styles["photo-selected"] : ""}`}>
                    <Image
                        alt={`Image album - ${albumName}`}
                        src={image}
                        layout="fill"
                        objectFit="cover"
                    />
                </a>
            ))}
        </section>
    );
};

export default Photos;
