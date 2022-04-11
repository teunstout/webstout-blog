export const createBlobFromInputImages = (event: React.ChangeEvent<HTMLInputElement>): string[] => {
    let imgs: string[] = [];
    if (!event.target.files) return imgs;

    for (let i: number = 0; i < event.target.files.length; i++) {
        if (!event.target.files[i]) return imgs;
        imgs.push(URL.createObjectURL(event.target.files[i]));
    }

    return imgs;
};
