import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/nav";
import styles from "./Index.module.scss";
import Updates from "../components/updates";
import Banner from "../components/elements/banner";
import Logo from "../components/elements/logo";

const Home: NextPage = () => {
	return (
		<div className={styles["container"]}>
			<Head>
				<title>Webstout Blog - Welkom</title>
				<meta name="Home" content="Homescreen of blog" />
				<link rel="icon" href="/logo.svg" />
			</Head>

			<header>
				<Logo />
				<Banner imgSrc="/img/sweden-panorama.jpeg" imgAlt="Sweden Panorama" />
				<Nav />
			</header>

			<main className={styles["main"]}>
				<Updates />
			</main>
		</div>
	);
};

export default Home;
