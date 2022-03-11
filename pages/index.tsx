import type { NextPage } from "next";
import Head from "next/head";
import Logo from "../components/elements/logo";
import Nav from "../components/nav";
import styles from "./Index.module.scss";
import Updates from "../components/updates";
import Link from "next/link";
import Banner from "../components/elements/banner";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Webstout Blog - Welkom</title>
				<meta name="Home" content="Homescreen of blog" />
				<link rel="icon" href="/logo.svg" />
			</Head>

			<header className={styles.header}>
				<Link href="" passHref>
					<a>
						<Logo />
					</a>
				</Link>
				<Banner imgSrc="/img/sweden-panorama.jpeg" imgAlt="Sweden Panorama" />
				<Nav />
			</header>

			<main className={styles["main"]}>
				<Updates />
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
};

export default Home;
