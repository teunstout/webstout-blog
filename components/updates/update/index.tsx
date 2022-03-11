import type { NextPage } from "next";

import styles from "./Index.module.scss";

export interface UpdateInterface {
	title: string;
	description: string;
	pubDate: string; // Format should be day-month-year
}

const Update: NextPage<UpdateInterface> = ({ title, description, pubDate }) => {
	return (
		<article key={pubDate}>
			<h3 className={styles["title"]}>{title}</h3>
			<p className={styles["update"]}>
				{description}
				<time className={styles["pub-date"]} dateTime={pubDate}>
					{` ${pubDate}`}
				</time>
			</p>
		</article>
	);
};

export default Update;
