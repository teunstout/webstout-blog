import { UploadFormInterface } from "../../redux/slices/formSlice";

export const formButtonDisabled = (formState: UploadFormInterface): boolean => {
    const { title, subtitle, startDate, endDate, images } = formState;
    return (
        title.length === 0 ||
        subtitle.length === 0 ||
        startDate.length === 0 ||
        endDate.length === 0 ||
        images.length === 0
    );
};

export default formButtonDisabled;
