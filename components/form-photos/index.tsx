import styles from "./Index.module.scss";
import { resetUploadFormState, setBanner, UploadFormInterface } from "../../redux/slices/formSlice";
import Icon, { IconEnum } from "../elements/icon";
import Button from "../elements/button";
import uploadAlbum from "../../utils/functions/uploadAlbum";
import { useDispatch } from "react-redux";
import Photos from "../photos";
import { Dispatch, SetStateAction, useState } from "react";
import { PathsEnum } from "../../utils/enums/paths";
import RollerText from "../roller-text";

interface FormPhotosInterface {
    form: UploadFormInterface;
    setShowPhotos: Dispatch<SetStateAction<boolean>>;
}

const FormPhotos = ({ form, setShowPhotos }: FormPhotosInterface) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);

    const displayPhotoMessage = (): string => {
        return form.images && form.images.length
            ? "Select a photo you want to use as banner"
            : "No photo's, go back and upload photo's";
    };

    const uploadFormAndReset = async () => {
        setLoading(true);
        await uploadAlbum(form);
        dispatch(resetUploadFormState());
        window.location.href = PathsEnum.album;
    };

    const selectPhoto = (index: number) => {
        dispatch(setBanner(form.images[index]));
    };

    if (loading) {
        return <RollerText text="This might take a while, don't click away" />;
    }

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

            <Photos
                images={form.images.map(img => img.url)}
                albumName={form.title}
                onSelect={selectPhoto}
            />

            <div className={styles["photos-bottom-buttons"]}>
                <Button onClick={() => setShowPhotos(false)}>Previous Step</Button>
                <Button onClick={uploadFormAndReset}>Submit</Button>
            </div>
        </>
    );
};

export default FormPhotos;
