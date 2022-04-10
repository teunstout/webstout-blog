import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../components/page-layout";
import styles from "./Index.module.scss";
import Button from "../components/button";
import { writeUserData } from "../utils/firebase/album";
import { dateToLocalDate } from "../utils/convert-date";
import { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../utils/firebase";
import { readMemberData } from "../utils/firebase/member";

const Home: NextPage = () => {
	const [url, setUrl] = useState<string>("/img/sweden-panorama.jpeg");
	const testUpload = () => {
		writeUserData({
			title: "Sweden - Stockholm",
			subtitle: "School project sweden",
			image: "localhost:3000/img/sweden-panorama.jpeg",
			startDate: dateToLocalDate(new Date()),
			endDate: dateToLocalDate(new Date()),
		});
	};

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

				<Button className={styles["button"]} onClick={testUpload}>
					Upload Test
				</Button>
			</main>
		</PageLayout>
	);
};

export default Home;
