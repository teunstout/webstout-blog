import Image from "next/image";
import styles from "./Index.module.scss";

export enum IconEnum {
	logo = "logo",
	instagram = "instagram",
}

interface IconInterface {
	icon: IconEnum;
	height: number | string;
	width: number | string;
	className?: string;
	hover?: boolean;
}

const Icon = ({ icon, height, width, className, hover }: IconInterface) => {
	return (
		<Image
			className={`${styles["icon"]} ${
				hover ? styles["icon-hover"] : ""
			} ${className}`}
			alt={`icon-${icon}`}
			src={`/icon/${icon}.svg`}
			height={height}
			width={width}
		/>
	);
};

export default Icon;
