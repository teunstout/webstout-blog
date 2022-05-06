import Image from "next/image";
import React from "react";
import styles from "./Index.module.scss";

interface PhotoSliderInterface {
    images: string[];
}

const PhotoSlider = ({ images }: PhotoSliderInterface) => {
    return (
        <div className={styles["slider"]}>
            <Image
                className={styles["slider-img"]}
                src={images[0]}
                alt="Slider image"
                width={720}
                height={720}
                objectFit="contain"
            />
            <Image
                className={styles["slider-img"]}
                src={images[1]}
                alt="Slider image"
                width={720}
                height={720}
                objectFit="contain"
            />
            <Image
                className={styles["slider-img"]}
                src={images[2]}
                alt="Slider image"
                width={720}
                height={720}
                objectFit="contain"
            />
            <Image
                className={styles["slider-img"]}
                src={images[3]}
                alt="Slider image"
                width={720}
                height={720}
                objectFit="contain"
            />
            <Image
                className={styles["slider-img"]}
                src={images[4]}
                alt="Slider image"
                width={720}
                height={720}
                objectFit="contain"
            />
            <button></button>
            <button></button>
        </div>
    );
};

export default PhotoSlider;
