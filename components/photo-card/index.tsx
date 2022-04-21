import Image from "next/image";
import styles from "./Index.module.scss";

interface PhotoCardInterface {
    image: string;
    title: string;
    subTitle: string;
}

const PhotoCard = ({ image, title, subTitle }: PhotoCardInterface) => {
    return (
        <article className={styles["photo-card"]}>
            <Image alt={title} src={image} height={1080} width={1920} objectFit="cover" />

            <h2>{title}</h2>
            <p>{subTitle}</p>
        </article>
    );
};

export default PhotoCard;
