import Link from "next/link";
import Icon, { IconEnum } from "../icon";
import IconDynamic from "../icon/dynamic";
import styles from "./Index.module.scss";

const Navigation = () => {
	return (
		<nav className={styles["navigation-main"]}>
			<Link href="/" passHref>
				<a>
					<IconDynamic className={styles["image"]} icon={IconEnum.logo} />
				</a>
			</Link>

			<div className={styles["lists"]}>
				<ul className={styles["list"]}>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/album">Albums</Link>
					</li>
				</ul>

				<ul className={styles["list"]}>
					<li>
						<Link href="https://www.instagram.com/teun_stout" passHref>
							<a>
								<Icon icon={IconEnum.instagram} height={24} width={24} hover />
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
