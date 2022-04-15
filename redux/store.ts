import { configureStore } from "@reduxjs/toolkit";
import albumsSlice, { AlbumsInterface } from "./slices/albumSlice";
import uploadFormSlice, { UploadFormInterface } from "./slices/formSlice";

export interface StoreState {
    uploadForm: UploadFormInterface;
    albums: AlbumsInterface;
}

export default configureStore<StoreState>({
    reducer: {
        uploadForm: uploadFormSlice,
        albums: albumsSlice,
    },
});
