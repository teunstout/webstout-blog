import Link from "next/link";
import styles from "../Index.module.scss";

interface NavItemInterface {
    path: string;
    label: string;
}

const navItems: NavItemInterface[] = [
    {
        path: "/",
        label: "Home",
    },
    {
        path: "/albums",
        label: "Albums",
    },
    {
        path: "/blog",
        label: "Blog",
    },
];

const TextList = () => {
    return (
        <ul className={styles["text-list"]}>
            {navItems.map(({ path, label }, index) => (
                <li key={index} className={styles["text-item"]}>
                    <Link href={path} passHref>
                        <a>{label}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default TextList;
