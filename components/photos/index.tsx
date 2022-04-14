import Image from "next/image";
import styles from "./Index.module.scss";

interface PhotosInterface {
    albumName: string;
    images: string[];
}

const Photos = ({ images, albumName }: PhotosInterface) => {
    return (
        <section className={styles["photo-grid"]}>
            {images.map((image: string, index: number) => (
                <a key={index} className={styles["photo-wrapper"]}>
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
