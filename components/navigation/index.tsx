import Link from "next/link";
import Icon, { IconEnum } from "../elements/icon";
import IconDynamic from "../elements/icon/dynamic";
import IconList from "./icon-list";
import styles from "./Index.module.scss";
import TextList from "./text-list";

const Navigation = () => {
    return (
        <nav className={styles["main-nav"]}>
            <Link href="/" passHref>
                <a className={styles["main-nav-link"]}>
                    <IconDynamic icon={IconEnum.logo} />
                </a>
            </Link>

            <TextList />
            <IconList />
        </nav>
    );
};

export default Navigation;
