import styles from "./Index.module.scss";

const Button = (props: React.HTMLProps<HTMLAnchorElement>) => {
	return (
		<a
			{...props}
			className={`${styles["button"]} ${
				props.className ? props.className : ""
			}`}
		></a>
	);
};

export default Button;
