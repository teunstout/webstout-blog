import styles from "./Index.module.scss";
import Image from "next/image";
import Header from "../header";

interface PageLayoutInterface {
    children: React.ReactChild | React.ReactChild[];
    img?: string;
    className?: string;
}

const PageLayout = ({
    children,
    img = "/img/sweden-panorama.jpeg",
    className,
}: PageLayoutInterface) => {
    return (
        <div className={`${styles["content"]} ${className ? className : ""}`}>
            <Header>
                <div className={styles["header-photo-wrapper"]}>
                    <Image alt={"heading"} src={img} layout="fill" objectFit="cover" priority />
                </div>
            </Header>
            {children}
        </div>
    );
};

export default PageLayout;
