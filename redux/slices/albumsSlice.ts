import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlbumInterface } from "./albumSlice";

export interface AlbumsInterface {
    loading: boolean;
    data: AlbumInterface[];
    lastAlbum?: string;
    moreAlbums: boolean;
}

const initialState: AlbumsInterface = {
    loading: false,
    data: [],
    moreAlbums: true,
};

export const albumsSlice = createSlice({
    name: "albums-slice",
    initialState: initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setLastAlbum: (state, action: PayloadAction<string>) => {
            state.lastAlbum = action.payload;
        },
        setMoreAlbums: (state, action: PayloadAction<boolean>) => {
            state.moreAlbums = action.payload;
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
export const { setLoading, setLastAlbum, setMoreAlbums, addAlbums, addAlbum } = albumsSlice.actions;

export default albumsSlice.reducer;
