import type { NextPage } from "next";
import styles from "./Index.module.scss";
import Update, { UpdateInterface } from "./update";

const Updates: NextPage = () => {
	// TODO: Async request with loading
	const articles: UpdateInterface[] = [
		{
			title: "Lorem, ipsum dolor",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque eaque, rerum fugiat reprehenderit sunt eum quod accusantium, non doloribus explicabo.",
			pubDate: "24-03-1999",
		},
		{
			title: "Lorem, ipsum dolor",
			description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
			pubDate: "24-03-1999",
		},
		{
			title: "Lorem, ipsum dolor",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque eaque, rerum fugiat reprehenderit sunt eum quod accusantium, non doloribus explicabo. Quae natus earum officiis sunt nam, voluptate quasi recusandae.",
			pubDate: "24-03-1999",
		},
	];

	if (articles.length === 0) {
		return <p>Currently there are no updates</p>;
	}

	return (
		<article>
			<h2>Updates</h2>
			<div className={styles["articles"]}>
				{articles.map((article, index) => (
					<Update
						key={index}
						title={article.title}
						description={article.description}
						pubDate={article.pubDate}
					/>
				))}
			</div>
		</article>
	);
};

export default Updates;
