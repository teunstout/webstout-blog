import Link from "next/link";
import Icon, { IconEnum } from "../../elements/icon";
import styles from "../Index.module.scss";

interface IconItemInterface {
    url: string;
    icon: IconEnum;
}

const iconItems: IconItemInterface[] = [
    {
        url: "https://www.instagram.com/teun_stout",
        icon: IconEnum.instagram,
    },
    {
        url: "https://github.com/teunstout",
        icon: IconEnum.github,
    },
    {
        url: "https://www.linkedin.com/in/teun-stout-78399b187/",
        icon: IconEnum.linkedIn,
    },
];

const IconList = () => {
    return (
        <ul className={styles["icon-list"]}>
            {iconItems.map(({ url, icon }, index) => (
                <li key={index} className={styles["icon-item"]}>
                    <Link href={url} passHref>
                        <a target="_blank">
                            <Icon icon={icon} height={24} width={24} hover />
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default IconList;
