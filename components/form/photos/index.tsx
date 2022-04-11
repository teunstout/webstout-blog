import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { createBlobFromInputImages } from "../../../utils/blob-input-images";
import { setBanner, updateImages } from "../../../utils/redux/slices/upload-form.slice";
import { StoreState } from "../../../utils/redux/store";
import Button from "../../elements/button";
import styles from "./Index.module.scss";

interface FormPhotosInterface {
    previousStep: () => void;
}

const FormPhotos = ({ previousStep }: FormPhotosInterface) => {
    const dispatch = useDispatch();
    const { images, banner } = useSelector((state: StoreState) => state.uploadForm);

    const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const images: string[] = createBlobFromInputImages(event);
        dispatch(updateImages(images));
    };

    return (
        <article className={styles["photos-container"]}>
            <h1 className={styles["photos-h1"]}>Selected Photos</h1>
            {images && images.length !== 0 && (
                <p>Select a photo. This will be the album photo and header photo</p>
            )}

            <div className={styles["photos"]}>
                {(!images || images.length) === 0 && (
                    <section className={styles["photos-text"]}>
                        <h2 className={styles["form-h2"]}>Files</h2>
                        <p>No files selected</p>
                    </section>
                )}

                {images.map((path, index) => (
                    <a
                        key={index}
                        className={`${styles["photo-wrapper"]} ${
                            path === banner ? styles["photo-selected"] : ""
                        }`}
                        onClick={() => dispatch(setBanner(path))}>
                        <Image alt={"photo selected"} src={path} layout="fill" objectFit="cover" />
                    </a>
                ))}
            </div>

            <div className={styles["photos-buttons"]}>
                <Button onClick={previousStep}>Previous Step</Button>
                <Button>Submit</Button>
            </div>
        </article>
    );
};

export default FormPhotos;
