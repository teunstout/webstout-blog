import styles from "./Index.module.scss";

interface ButtonInterface {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

const Button = ({ children, className, onClick }: ButtonInterface) => {
	return (
		<button
			className={`${styles["button"]} ${className ? className : ""}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
