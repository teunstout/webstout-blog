import Image from "next/image";
import styles from "./Index.module.scss";

export enum IconEnum {
	logo = "logo",
	instagram = "instagram",
	github = "github",
}

interface IconInterface {
	icon: IconEnum;
	height: number | string;
	width: number | string;
	className?: string;
	hover?: boolean;
}

const Icon = ({ icon, height, width, className, hover }: IconInterface) => {
	const iconURL = (): string => {
		switch (icon) {
			case IconEnum.instagram:
				return "/icon/instagram.svg";
			case IconEnum.logo:
				return "/icon/logo.svg";
			case IconEnum.github:
				return "/img/github.png";
			default:
				return "";
		}
	};

	return (
		<Image
			className={`${styles["icon"]} ${
				hover ? styles["icon-hover"] : ""
			} ${className}`}
			alt={`icon-${icon}`}
			src={iconURL()}
			height={height}
			width={width}
		/>
	);
};

export default Icon;
