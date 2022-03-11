import type { NextPage } from "next";
import Banner, { BannerInterface } from "../banner";
import styles from "./Index.module.scss";

interface BannerTextInterface extends BannerInterface {
	title: string;
	subTitle?: string;
	imgSrc: string;
	imgAlt: string;
}

const BannerText: NextPage<BannerTextInterface> = ({
	title,
	subTitle,
	imgSrc,
	imgAlt,
}) => {
	return (
		<Banner imgSrc={imgSrc} imgAlt={imgAlt}>
			<p className={styles["sub-title"]}>{subTitle}</p>
			<h1 className={styles["title"]}>{title}</h1>
		</Banner>
	);
};

export default BannerText;
