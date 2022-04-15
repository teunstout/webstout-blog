export const dateToLocalDate = (date: Date): string =>
    date.toLocaleDateString("nl-NL", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

export default dateToLocalDate;
