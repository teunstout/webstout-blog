import { configureStore } from "@reduxjs/toolkit";
import userSlice, { UserInterface } from "./slices/userSlice";
import albumsSlice, { AlbumsInterface } from "./slices/albumsSlice";
import uploadFormSlice, { UploadFormInterface } from "./slices/formSlice";
import albumSlice, { AlbumInterface } from "./slices/albumSlice";

export interface StoreState {
    uploadForm: UploadFormInterface;
    albums: AlbumsInterface;
    album: AlbumInterface;
    user: UserInterface;
}

export default configureStore<StoreState>({
    reducer: {
        uploadForm: uploadFormSlice,
        albums: albumsSlice,
        album: albumSlice,
        user: userSlice,
    },
});
