import Image from "next/image";
import { IconEnum } from "..";
import styles from "../Index.module.scss";

interface IconInterface {
    icon: IconEnum;
    className?: string;
}

const IconDynamic = ({ icon, className }: IconInterface) => {
    return (
        <Image
            className={`${styles["icon"]} ${className}`}
            alt={`icon-${icon}`}
            src={`/icon/${icon}.svg`}
            height="100%"
            width="100%"
        />
    );
};

export default IconDynamic;
