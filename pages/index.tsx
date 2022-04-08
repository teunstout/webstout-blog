import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Index.module.scss";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Webstout Blog - Welkom</title>
				<meta name="Home" content="Homescreen of blog" />
				<link rel="icon" href="/logo.svg" />
			</Head>
		</div>
	);
};

export default Home;
