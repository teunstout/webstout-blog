import styles from "./Index.module.scss";

interface ButtonInterface {
	children: React.ReactNode;
	className?: string;
}

const Button = ({ children, className }: ButtonInterface) => {
	return (
		<button className={`${styles["button"]} ${className ? className : ""}`}>
			{children}
		</button>
	);
};

export default Button;
