import Roller from "../elements/roller";
import styles from "./Index.module.scss";

interface RollerTextInterface {
    className?: string;
    text: string;
}

const RollerText = ({ text, className }: RollerTextInterface) => {
    return (
        <div className={`${styles["roller-text"]} ${className ? className : ""}`}>
            <Roller />
            <p>{text}</p>
        </div>
    );
};

export default RollerText;
