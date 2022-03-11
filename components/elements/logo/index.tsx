import type { NextPage } from "next";
import Image from "next/image";
import styles from "./Index.module.scss";

const Logo: NextPage = () => {
	return (
		<div className={styles["wrapper-logo"]}>
			<Image
				alt="Logo"
				src="/logo.svg"
				height={40}
				width="100%"
				objectFit="contain"
			/>
		</div>
	);
};

export default Logo;
