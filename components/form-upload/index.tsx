import { useState } from "react";
import Button from "../elements/button";
import Input from "../elements/input";
import InputFile from "../elements/input/file";
import Label from "../elements/label";
import styles from "./Index.module.scss";

interface FormUploadInterface {}

const FormUpload = () => {
	const [images, setImages] = useState<string[]>([]);

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
	);
};

export default FormUpload;
