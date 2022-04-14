import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../elements/button";
import styles from "./Index.module.scss";
import { StoreState } from "../../../redux/store";
import {
    ImageInterface,
    resetUploadFormState,
    setBanner,
} from "../../../redux/slices/uploadFormSlice";
import uploadAlbum from "../../../utils/uploadAlbum";
import { useEffect } from "react";

interface FormPhotosInterface {
    previousStep: () => void;
}

const FormPhotos = ({ previousStep }: FormPhotosInterface) => {
    const dispatch = useDispatch();
    const form = useSelector((state: StoreState) => state.uploadForm);

    const uploadFormAndReset = () => {
        uploadAlbum(form);
        dispatch(resetUploadFormState());
    };

    return (
        <article className={styles["photos-container"]}>
            <h1 className={styles["photos-h1"]}>Selected Photos</h1>
            {form.images && form.images.length !== 0 && (
                <p>Select a photo. This will be the album photo and header photo</p>
            )}

            <div className={styles["photos"]}>
                {(!form.images || form.images.length) === 0 && (
                    <section className={styles["photos-text"]}>
                        <h2 className={styles["form-h2"]}>Files</h2>
                        <p>No files selected</p>
                    </section>
                )}

                {form.images.map((image: ImageInterface, index: number) => (
                    <a
                        key={index}
                        className={`${styles["photo-wrapper"]} ${
                            image.filename === form.banner.filename ? styles["photo-selected"] : ""
                        }`}
                        onClick={() => dispatch(setBanner(image))}>
                        <Image
                            alt={"photo selected"}
                            src={image.url}
                            layout="responsive"
                            width={320}
                            height={180}
                            objectFit="contain"
                            objectPosition="bottom"
                        />
                    </a>
                ))}
            </div>

            <div className={styles["photos-buttons"]}>
                <Button onClick={previousStep}>Previous Step</Button>
                <Button onClick={uploadFormAndReset}>Submit</Button>
            </div>
        </article>
    );
};

export default FormPhotos;
