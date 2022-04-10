import { ref, set } from "firebase/database";
import { db } from ".";

export interface UserDTO {
	title: string;
	subtitle: string;
	image: string;
	startDate: string;
	endDate: string;
}

export function writeUserData({
	title,
	subtitle,
	image,
	startDate,
	endDate,
}: UserDTO) {
	set(ref(db, "albums/" + title), {
		title: title,
		subtitle: subtitle,
		image: image,
		start_date: startDate,
		end_date: endDate,
	});
}
