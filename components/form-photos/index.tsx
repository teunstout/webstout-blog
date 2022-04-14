import styles from "./Index.module.scss";
import { resetUploadFormState, UploadFormInterface } from "../../redux/slices/formSlice";
import Icon, { IconEnum } from "../elements/icon";
import Button from "../elements/button";
import uploadAlbum from "../../utils/functions/uploadAlbum";
import { useDispatch } from "react-redux";
import Photos from "../photos";
import { Dispatch, SetStateAction } from "react";

interface FormPhotosInterface {
    form: UploadFormInterface;
    setShowPhotos: Dispatch<SetStateAction<boolean>>;
}

const FormPhotos = ({ form, setShowPhotos }: FormPhotosInterface) => {
    const dispatch = useDispatch();

    const displayPhotoMessage = (): string => {
        return form.images && form.images.length
            ? "Select a photo you want to use as banner"
            : "No photo's, go back and upload photo's";
    };

    const uploadFormAndReset = async () => {
        await uploadAlbum(form);
        dispatch(resetUploadFormState());
    };

    return (
        <>
            <div className={styles["photos-top-buttons"]}>
                <a onClick={() => setShowPhotos(false)}>
                    <Icon icon={IconEnum.arrowLeft} height={24} width={24} />
                </a>

                <Button onClick={uploadFormAndReset}>Submit</Button>
            </div>

            <div className={styles["photos-text"]}>
                <h1>Selected Photos</h1>
                <p>{displayPhotoMessage()}</p>
            </div>

            <Photos images={form.images.map(img => img.url)} albumName={form.title} />

            <div className={styles["photos-bottom-buttons"]}>
                <Button onClick={() => setShowPhotos(false)}>Previous Step</Button>
                <Button onClick={uploadFormAndReset}>Submit</Button>
            </div>
        </>
    );
};

export default FormPhotos;
