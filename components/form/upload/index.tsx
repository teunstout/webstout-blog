import { createBlobFromInputImages } from "../../../utils/blob-input-images";
import Button from "../../elements/button";
import Input from "../../elements/input";
import InputFile from "../../elements/input/file";
import Label from "../../elements/label";
import styles from "./Index.module.scss";
import _ from "lodash";
import { useDispatch } from "react-redux";
import React from "react";
import {
    setEndDate,
    setImages,
    setStartDate,
    setSubtitle,
    setTitle,
} from "../../../utils/redux/slices/upload-form.slice";

const DEBOUNCE_TIMER = 250;

interface FormUploadInterface {
    nextStep: () => void;
}

const FormUpload = ({ nextStep }: FormUploadInterface) => {
    const dispatch = useDispatch();

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        dispatch(setTitle(value));
    };

    const handleSubtitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        dispatch(setSubtitle(value));
    };

    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        dispatch(setStartDate(value));
    };

    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        dispatch(setEndDate(value));
    };

    const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const images: string[] = createBlobFromInputImages(event);
        dispatch(setImages(images));
    };

    // TODO: Check input for special charactersF
    return (
        <form className={styles["form"]}>
            <h1 className={styles["form-h1"]}>Create Album</h1>

            <div>
                <Label htmlFor="titel">
                    Title<abbr>*</abbr>
                </Label>
                <Input
                    id="title"
                    placeholder="Title"
                    onChange={_.debounce(handleTitleChange, DEBOUNCE_TIMER)}
                    required
                />
            </div>

            <div>
                <Label htmlFor="subtitle">
                    Subtitle<abbr>*</abbr>
                </Label>
                <Input
                    id="subtitle"
                    placeholder="Small description"
                    onChange={_.debounce(handleSubtitleChange, DEBOUNCE_TIMER)}
                    required
                />
            </div>

            <div className={styles["form-dates"]}>
                <div>
                    <Label htmlFor="start-date">
                        Start Date<abbr>*</abbr>
                    </Label>
                    <Input
                        id="start-date"
                        type="date"
                        onChange={_.debounce(handleStartDateChange, DEBOUNCE_TIMER)}
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="end-date">
                        End Date<abbr>*</abbr>
                    </Label>
                    <Input
                        id="end-date"
                        type="date"
                        onChange={_.debounce(handleEndDateChange, DEBOUNCE_TIMER)}
                        required
                    />
                </div>
            </div>

            <InputFile multiple={true} accept="image/*" onChange={handleImagesChange} required />

            {/* TODO: Implement disabled when form filled incorrect */}
            <Button className={styles["form-button"]} onClick={nextStep}>
                Next
            </Button>
        </form>
    );
};

export default FormUpload;
