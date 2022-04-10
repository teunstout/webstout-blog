export const dateToLocalDate = (date: Date): string => {
	return date.toLocaleDateString("nl-NL", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};
