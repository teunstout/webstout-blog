import styles from "./Index.module.scss";

const InputFile = (props: React.HTMLProps<HTMLInputElement>) => {
	return (
		<input
			{...props}
			type="file"
			className={`${styles["input-date"]} ${
				props.className ? props.className : ""
			}`}
		/>
	);
};

export default InputFile;
