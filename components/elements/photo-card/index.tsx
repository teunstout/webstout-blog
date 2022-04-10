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
			<div className={styles["photo-wrapper"]}>
				<Image alt={title} src={image} layout="fill" objectFit="cover" />
			</div>

			<h2>{title}</h2>
			<p>{subTitle}</p>
		</article>
	);
};

export default PhotoCard;
