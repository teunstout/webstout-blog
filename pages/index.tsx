import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../components/page-layout";
import styles from "./Index.module.scss";
import { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../utils/firebase";
import { readMemberData } from "../utils/firebase/member";

const Home: NextPage = () => {
	const [url, setUrl] = useState<string>("/img/sweden-panorama.jpeg");

	useEffect(() => {
		const storageRef = ref(storage, "/sweden-panorama.jpeg");
		getDownloadURL(storageRef)
			.then((res) => {
				setUrl(res);
			})
			.catch((err) => {
				console.log(err);
			});
		readMemberData();
	}, []);

	return (
		<PageLayout img={url}>
			<main className={styles["main"]}>
				<Head>
					<title>Webstout Blog - Welkom</title>
					<meta name="Home" content="Homescreen of blog" />
					<link rel="icon" href="/logo.svg" />
				</Head>

			</main>
		</PageLayout>
	);
};

export default Home;
