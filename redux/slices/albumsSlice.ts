import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { AlbumInterface } from "./albumSlice";

export interface AlbumsInterface {
    loading: boolean;
    data: AlbumInterface[];
    startFrom?: DocumentData;
    noMoreAlbums: boolean;
}

const initialState: AlbumsInterface = {
    loading: false,
    data: [],
    noMoreAlbums: false,
};

export const albumsSlice = createSlice({
    name: "albums-slice",
    initialState: initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setStartedFrom: (state, action: PayloadAction<DocumentData>) => {
            state.startFrom = action.payload;
        },
        setNoMoreAlbums: (state, action: PayloadAction<boolean>) => {
            state.noMoreAlbums = action.payload;
        },
        addAlbums: (state, action: PayloadAction<AlbumInterface[]>) => {
            state.data = [...state.data, ...action.payload];
        },
        addAlbum: (state, action: PayloadAction<AlbumInterface>) => {
            const index = state.data.findIndex(album => album.id === action.payload.id);

            if (index === -1) {
                state.data = [...state.data, action.payload];
            } else {
                state.data[index] = action.payload;
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { setLoading, setStartedFrom, setNoMoreAlbums, addAlbums, addAlbum } =
    albumsSlice.actions;

export default albumsSlice.reducer;
