import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./Index.module.scss";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Webstout Blog - Welkom</title>
				<meta name="Home" content="Homescreen of blog" />
				<link rel="icon" href="/logo.svg" />
			</Head>

			<header className={styles.header}>
				{/* Logo */}
				<div className={styles["wrapper-logo"]}>
					<Image alt="Logo" src="/logo.svg" layout="fill" objectFit="contain" />
				</div>
				{/* Content */}
				<div className={styles["content"]}>
					<div className={styles["wrapper-panorama"]}>
						<Image
							className={styles["panorama"]}
							src="/img/sweden-panorama.jpeg"
							alt="Sweden Panorama"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className={styles["text"]}>
						<p className={styles["sub-title"]}>Piemol</p>
						<h1 className={styles["title"]}>Sweden</h1>
					</div>
				</div>
				{/* Navigation */}
				{/* <nav>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</nav> */}
			</header>

			<main className={styles.main}></main>

			<footer className={styles.footer}></footer>
		</div>
	);
};

export default Home;
