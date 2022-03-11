import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Index.module.scss";
import Link from "next/link";
import Logo from "../../components/elements/logo";
import BannerText from "../../components/elements/banner-text";
import Nav from "../../components/nav";
import Updates from "../../components/updates";

const Article: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Webstout Blog - Article</title>
				<meta name="Article" content="Articles of my trips" />
				<link rel="icon" href="/logo.svg" />
			</Head>

			<header className={styles.header}>
				<Link href="" passHref>
					<a>
						<Logo />
					</a>
				</Link>
				<BannerText
					imgSrc="/img/sweden-panorama.jpeg"
					imgAlt="Sweden Panorama"
					title="Sweden"
					subTitle="Stockholm"
				/>
				<Nav />
			</header>

			<main className={styles["main"]}></main>

			<footer className={styles.footer}></footer>
		</div>
	);
};

export default Article;
