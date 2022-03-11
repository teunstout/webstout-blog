import type { NextPage } from "next";
import Link from "next/link";
import Logo from "../logo";
import styles from "./Index.module.scss";

interface LogoHrefInterface {
	href: string;
}

const LogoHref: NextPage<LogoHrefInterface> = ({ href }) => {
	return (
		<Link href={href} passHref>
			<a className={styles["header-link"]}>
				<Logo />
			</a>
		</Link>
	);
};

export default LogoHref;
