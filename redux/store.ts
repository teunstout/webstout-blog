import { configureStore } from "@reduxjs/toolkit";
import uploadFormSlice, { UploadFormInterface } from "./slices/uploadFormSlice";

export interface StoreState {
    uploadForm: UploadFormInterface;
}

export default configureStore<StoreState>({
    reducer: {
        uploadForm: uploadFormSlice,
    },
});
