import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Index.module.scss";

interface NavElementInterface {
	path: string;
	name: string;
}

const Nav: NextPage = () => {
	const router = useRouter();

	const el: NavElementInterface[] = [
		{
			path: "/",
			name: "Kana",
		},
		{
			path: "/article",
			name: "Article",
		},
		{
			path: "/album",
			name: "Album",
		},
		{
			path: "/profile",
			name: "About Me",
		},
	];

	return (
		<ul className={styles["nav"]}>
			{el.map((item) => (
				<li className={styles["nav-el"]} key={item.name}>
					<Link href={item.path} passHref>
						<a
							className={
								router.pathname === item.path ? styles["nav-el-active"] : ""
							}
						>
							{item.name}
						</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Nav;
