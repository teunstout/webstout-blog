export const dateToLocalDate = (date: Date): string =>
    date.toLocaleDateString("nl-NL", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

export default dateToLocalDate;
