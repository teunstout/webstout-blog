import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../../components/button";
import Header from "../../components/header";
import PhotoCard from "../../components/photo-card";
import styles from "./Index.module.scss";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Webstout Blog - Photo Albums</title>
				<meta name="Home" content="Homescreen of blog" />
				<link rel="icon" href="/logo.svg" />
			</Head>

			<Header>
				<div className={styles["header-photo-wrapper"]}>
					<Image
						alt={"heading"}
						src="/img/sweden-panorama.jpeg"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</Header>

			<main className={styles["main"]}>
				<section>
					<header className={styles["main-header"]}>
						<h1>PHOTO</h1>
						<p>Photos shot by me at interesting places</p>
					</header>

					<div className={styles["main-photo-cards"]}>
						<PhotoCard
							image={`https://media.istockphoto.com/photos/stockholm-sweden-scenic-summer-sunset-view-with-colorful-sky-of-the-picture-id1132919653?k=20&m=1132919653&s=612x612&w=0&h=ABPX9bU-0VpqjV6_5y0BjpJo_Sz2gLOYf-JKtjKa34U=`}
							title="Sweden stockholm"
							subTitle="School trip stockholm"
						/>
						<PhotoCard
							image={`https://media.istockphoto.com/photos/stockholm-sweden-scenic-summer-sunset-view-with-colorful-sky-of-the-picture-id1132919653?k=20&m=1132919653&s=612x612&w=0&h=ABPX9bU-0VpqjV6_5y0BjpJo_Sz2gLOYf-JKtjKa34U=`}
							title="Sweden stockholm"
							subTitle="School trip stockholm"
						/>
						<PhotoCard
							image={`https://media.istockphoto.com/photos/stockholm-sweden-scenic-summer-sunset-view-with-colorful-sky-of-the-picture-id1132919653?k=20&m=1132919653&s=612x612&w=0&h=ABPX9bU-0VpqjV6_5y0BjpJo_Sz2gLOYf-JKtjKa34U=`}
							title="Sweden stockholm"
							subTitle="School trip stockholm"
						/>
					</div>

					<Button className={styles["main-button"]}>Load More</Button>
				</section>
			</main>
		</div>
	);
};

export default Home;
