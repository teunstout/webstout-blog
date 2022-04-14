import { configureStore } from "@reduxjs/toolkit";
import uploadFormSlice, { UploadFormSliceInterface } from "./slices/uploadFormSlice";

export interface StoreState {
    uploadForm: UploadFormSliceInterface;
}

export default configureStore<StoreState>({
    reducer: {
        uploadForm: uploadFormSlice,
    },
});
