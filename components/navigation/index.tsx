import type { NextPage } from "next";
import Link from "next/link";
import Icon, { IconEnum } from "../icon";
import IconDynamic from "../icon/dynamic";
import styles from "./Index.module.scss";

const Navigation: NextPage = () => {
	return (
		<nav className={styles["navigation-main"]}>
			<Link href="/" passHref>
				<IconDynamic className={styles["image"]} icon={IconEnum.logo} />
			</Link>

			<div className={styles["lists"]}>
				<ul className={styles["list"]}>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/photo">Photo</Link>
					</li>
				</ul>

				<ul className={styles["list"]}>
					<li>
						<Icon icon={IconEnum.instagram} height={24} width={24} hover />
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
