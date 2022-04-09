import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../components/page-layout";
import styles from "./Index.module.scss";
import { app } from "../utils/firebase";
import { getDatabase } from "firebase/database";
import Button from "../components/button";
import { writeUserData } from "../utils/firebase/album";
import { dateToLocalDate } from "../utils/convert-date";

const Home: NextPage = () => {
	const db = getDatabase(app);

	const testUpload = () => {
		writeUserData({
			title: "Sweden - Stockholm",
			subtitle: "School project sweden",
			image: "localhost:3000/img/sweden-panorama.jpeg",
			startDate: dateToLocalDate(new Date()),
			endDate: dateToLocalDate(new Date()),
		});
		console.log(db.app);
	};

	return (
		<PageLayout img="/img/sweden-panorama.jpeg">
			<main>
				<Head>
					<title>Webstout Blog - Welkom</title>
					<meta name="Home" content="Homescreen of blog" />
					<link rel="icon" href="/logo.svg" />
				</Head>
			</main>
			<Button onClick={testUpload}>Upload Test</Button>
		</PageLayout>
	);
};

export default Home;
