import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Index.module.scss";
import BannerText from "../../components/elements/banner-text";
import Nav from "../../components/nav";
import LogoHref from "../../components/elements/logo-href";

const Article: NextPage = () => {
	return (
		<div className={styles["container"]}>
			<Head>
				<title>Webstout Blog - Article</title>
				<meta name="Article" content="Articles of my trips" />
				<link rel="icon" href="/logo.svg" />
			</Head>

			<header>
				<LogoHref href="/" />
				<BannerText
					imgSrc="/img/sweden-panorama.jpeg"
					imgAlt="Sweden Panorama"
					title="Sweden"
					subTitle="Stockholm"
				/>
				<Nav />
			</header>

			<main className={styles["main"]}></main>
		</div>
	);
};

export default Article;
