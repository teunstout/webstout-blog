import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/navigation";
import styles from "./Index.module.scss";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Webstout Blog - Welkom</title>
				<meta name="Home" content="Homescreen of blog" />
				<link rel="icon" href="/logo.svg" />
			</Head>

			<header className={styles["header"]}>
				<Navigation />

				{/* <div className={styles["header-content"]}>
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
				</div> */}
			</header>

			<main className={styles["main"]}>
				<h1>PHOTO</h1>
				<p className={styles["main-subtitle"]}>Photos shot by me at interesting places</p>
			</main>

			<footer className={styles["footer"]}></footer>
		</div>
	);
};

export default Home;
