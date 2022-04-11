import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../elements/button";
import styles from "./Index.module.scss";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { StoreState } from "../../../redux/store";
import { ImageInterface, setBanner } from "../../../redux/slices/uploadFormSlice";

interface FormPhotosInterface {
    previousStep: () => void;
}

const FormPhotos = ({ previousStep }: FormPhotosInterface) => {
    const dispatch = useDispatch();
    const storage = getStorage();
    const form = useSelector((state: StoreState) => state.uploadForm);

    function writeAlbum() {
        form.images.forEach(photo => uploadPhoto(photo));
    }

    //TODO: Create better way of storing blob is stored 2 times
    // https://stackoverflow.com/questions/11876175/how-to-get-a-file-or-blob-from-an-object-url
    const uploadPhoto = async (photo: ImageInterface) => {
        const storageRef = ref(storage, photo.filename.toLowerCase());
        const blob = await fetch(photo.url).then(r => r.blob());

        uploadBytes(storageRef, blob).catch(err => console.warn(err));
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

                {form.images.map((image, index) => (
                    <a
                        key={index}
                        className={`${styles["photo-wrapper"]} ${
                            image.filename === form.banner.filename ? styles["photo-selected"] : ""
                        }`}
                        onClick={() => dispatch(setBanner(image))}>
                        <Image
                            alt={"photo selected"}
                            src={image.url}
                            layout="fill"
                            objectFit="cover"
                        />
                    </a>
                ))}
            </div>

            <div className={styles["photos-buttons"]}>
                <Button onClick={previousStep}>Previous Step</Button>
                <Button onClick={writeAlbum}>Submit</Button>
            </div>
        </article>
    );
};

export default FormPhotos;
