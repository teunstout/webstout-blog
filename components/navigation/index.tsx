import Link from "next/link";
import Button from "../button";
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
					<li className={styles["list-item"]}>
						<Link href="/" passHref>
							<a>Home</a>
						</Link>
					</li>
					<li className={styles["list-item"]}>
						<Link href="/album" passHref>
							<a>Albums</a>
						</Link>
					</li>
					<li className={styles["list-item"]}>
						<Link href="/blog" passHref>
							<a>Blog</a>
						</Link>
					</li>
					{/* TODO: When admin show button */}
					{false && <Button className={styles["upload-button"]}>Upload</Button>}
				</ul>

				<ul className={styles["list"]}>
					<li className={styles["list-item"]}>
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
