import Image from "next/image";
import { IconEnum } from "..";
import styles from "../Index.module.scss";

interface IconInterface {
	icon: IconEnum;
	className?: string;
}

const ClickableIcon = ({ icon, className }: IconInterface) => {
	return (
		<a href="">
			
		</a>
	
	);
};

export default ClickableIcon;
