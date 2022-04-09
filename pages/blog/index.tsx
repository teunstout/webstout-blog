import type { NextPage } from "next";
import Head from "next/head";
import Button from "../../components/button";
import PageLayout from "../../components/page-layout";
import PhotoCard from "../../components/photo-card";
import styles from "./Index.module.scss";

const Home: NextPage = () => {
	return (
		<PageLayout img="/img/sweden-panorama.jpeg">
			<main className={styles["main"]}>
				<Head>
					<title>Webstout Blog - Blog</title>
					<meta name="Home" content="Homescreen of blog" />
					<link rel="icon" href="/logo.svg" />
				</Head>
			</main>
		</PageLayout>
	);
};

export default Home;
