import { configureStore } from "@reduxjs/toolkit";
import userSlice, { UserInterface } from "./slices/userSlice";
import albumsSlice, { AlbumsInterface } from "./slices/albumSlice";
import uploadFormSlice, { UploadFormInterface } from "./slices/formSlice";

export interface StoreState {
    uploadForm: UploadFormInterface;
    albums: AlbumsInterface;
    user: UserInterface;
}

export default configureStore<StoreState>({
    reducer: {
        uploadForm: uploadFormSlice,
        albums: albumsSlice,
        user: userSlice,
    },
});
