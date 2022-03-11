import type { NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";
import styles from "./Index.module.scss";

export interface BannerInterface {
	imgSrc: string;
	imgAlt: string;
	children?: ReactNode[] | ReactNode;
}

const Banner: NextPage<BannerInterface> = ({ imgSrc, imgAlt, children }) => {
	return (
		<div className={styles["banner"]}>
			<div className={styles["wrapper-panorama"]}>
				<Image
					className={styles["panorama"]}
					src={imgSrc}
					alt={imgAlt}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className={styles["banner-content"]}>{children}</div>
		</div>
	);
};

export default Banner;
