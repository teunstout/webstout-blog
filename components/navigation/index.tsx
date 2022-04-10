import Link from "next/link";
import Button from "../elements/button";
import Icon, { IconEnum } from "../elements/icon";
import IconDynamic from "../elements/icon/dynamic";
import styles from "./Index.module.scss";

interface NavItemInterface {
	path: string;
	label: string;
}

interface IconItemInterface {
	url: string;
	icon: IconEnum;
}

const Navigation = () => {
	const navItems: NavItemInterface[] = [
		{
			path: "/",
			label: "Home",
		},
		{
			path: "/album",
			label: "Albums",
		},
		{
			path: "/blog",
			label: "Blog",
		},
	];
	const iconItems: IconItemInterface[] = [
		{
			url: "https://www.instagram.com/teun_stout",
			icon: IconEnum.instagram,
		},
		{
			url: "https://github.com/teunstout",
			icon: IconEnum.github,
		},
	];

	return (
		<nav className={styles["navigation-main"]}>
			<Link href="/" passHref>
				<a className={styles["navigation-main-link"]}>
					<IconDynamic className={styles["image"]} icon={IconEnum.logo} />
				</a>
			</Link>

			<div className={styles["lists"]}>
				<ul className={styles["list-nav"]}>
					{navItems.map(({ path, label }, index) => (
						<li key={index} className={styles["nav-item"]}>
							<Link href={path} passHref>
								<a>{label}</a>
							</Link>
						</li>
					))}
				</ul>

				<ul className={styles["list-icon"]}>
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
			</div>

			{/* TODO: When admin show button */}
			{true && (
				<Button className={styles["upload-button"]} href="/upload">
					Upload
				</Button>
			)}
		</nav>
	);
};

export default Navigation;
