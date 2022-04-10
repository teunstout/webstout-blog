import styles from "./Index.module.scss";
import Image from "next/image";
import Header from "../header";

interface PageLayoutInterface {
	children: React.ReactChild | React.ReactChild[];
	img: string;
}

const PageLayout = ({ children, img }: PageLayoutInterface) => {
	return (
		<div className={styles["content"]}>
			<Header>
				<div className={styles["header-photo-wrapper"]}>
					<Image
						alt={"heading"}
						src={img}
						layout="fill"
						objectFit="cover"
						priority
					/>
				</div>
			</Header>
			{children}
		</div>
	);
};

export default PageLayout;
