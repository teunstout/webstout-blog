import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Button from "../../components/elements/button";
import Input from "../../components/elements/input";
import InputFile from "../../components/elements/input/file";
import Label from "../../components/elements/label";
import PageLayout from "../../components/page-layout";
import styles from "./Index.module.scss";

const Upload: NextPage = () => {
	const [images, setImages] = useState<string[]>([]);
	const [selected, setSelected] = useState<string>();

	const showImages = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return;
		let imgs: string[] = [];

		for (let i: number = 0; i < event.target.files.length; i++) {
			if (!event.target.files[i]) return;
			imgs.push(URL.createObjectURL(event.target.files[i]));
		}

		setImages(imgs);
	};

	return (
		<PageLayout className={styles["layout"]}>
			<main className={styles["main"]}>
				<Head>
					<title>Webstout Blog - Upload</title>
					<meta name="Home" content="Homescreen of blog" />
					<link rel="icon" href="/logo.svg" />
				</Head>

				<form className={styles["form"]} action="">
					<h1 className={styles["form-h1"]}>Create Album</h1>

					<div>
						<Label htmlFor="titel">Title</Label>
						<Input id="title" placeholder="Title" />
					</div>

					<div>
						<Label htmlFor="subtitle">Subtitle</Label>
						<Input id="subtitle" placeholder="Small description" />
					</div>

					<div className={styles["form-dates"]}>
						<div>
							<Label htmlFor="start-date">Start Date</Label>
							<Input id="start-date" type="date" />
						</div>
						<div>
							<Label htmlFor="end-date">End Date</Label>
							<Input id="end-date" type="date" />
						</div>
					</div>

					<InputFile multiple={true} accept="image/*" onChange={showImages} />
					<Button className={styles["form-button"]}>Submit</Button>
				</form>

				<article className={styles["photos-container"]}>
					<h1 className={styles["photos-h1"]}>Selected Photos</h1>
					{images && images.length !== 0 && (
						<p>Select a photo. This will be the album photo and header photo</p>
					)}

					<div className={styles["photos"]}>
						{(!images || images.length) === 0 && (
							<section className={styles["photos-text"]}>
								<h2 className={styles["form-h2"]}>Files</h2>
								<p>No files selected</p>
							</section>
						)}

						{images.map((path, index) => (
							<a
								key={index}
								className={`${styles["photo-wrapper"]} ${
									path === selected ? styles["photo-selected"] : ""
								}`}
								onClick={() => setSelected(path)}
							>
								<Image
									alt={"photo selected"}
									src={path}
									layout="fill"
									objectFit="cover"
								/>
							</a>
						))}
					</div>
				</article>
			</main>
		</PageLayout>
	);
};

export default Upload;
