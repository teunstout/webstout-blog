import Button from "../elements/button";
import Input from "../elements/input";
import InputFile from "../elements/input/file";
import Label from "../elements/label";
import styles from "./Index.module.scss";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
    setEndDate,
    setImages,
    setStartDate,
    setSubtitle,
    setTitle,
    UploadFormInterface,
} from "../../redux/slices/uploadFormSlice";
import inputImgsToBlob from "../../utils/inputImgsToBlob";
import { StoreState } from "../../redux/store";
import formButtonDisabled from "../../utils/formButtonDisabled";

const DEBOUNCE_TIMER = 250;

interface FormUploadInterface {
    nextStep: () => void;
    form: UploadFormInterface;
}

const Form = ({ nextStep, form }: FormUploadInterface) => {
    const dispatch = useDispatch();
    const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

    useEffect(() => {
        setDisabledBtn(formButtonDisabled(form));
    }, [form]);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTitle(event.target.value));
    };

    const handleSubtitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSubtitle(event.target.value));
    };

    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartDate(event.target.value));
    };

    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setEndDate(event.target.value));
    };

    const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setImages(inputImgsToBlob(event)));
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
                    defaultValue={form.title}
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
                    defaultValue={form.subtitle}
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
                        defaultValue={form.startDate}
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
                        defaultValue={form.endDate}
                        required
                    />
                </div>
            </div>

            <InputFile multiple={true} accept="image/*" onChange={handleImagesChange} required />

            {/* TODO: Implement disabled when form filled incorrect */}
            <Button className={styles["form-button"]} onClick={nextStep} disabled={disabledBtn}>
                Next
            </Button>
        </form>
    );
};

export default Form;
