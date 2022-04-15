import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export interface AlbumsInterface {
    loading: boolean;
    albums: AlbumInterface[];
    startFrom?: DocumentData;
    noMoreAlbums: boolean;
}

export interface AlbumInterface {
    title: string;
    subtitle: string;
    startDate: string;
    endDate: string;
    image: string[];
    banner: string;
}

const initialState: AlbumsInterface = {
    loading: false,
    albums: [],
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
            state.albums = [...state.albums, ...action.payload];
        },
        addAlbum: (state, action: PayloadAction<AlbumInterface>) => {
            state.albums = [...state.albums, action.payload];
        },
    },
});

// Action creators are generated for each case reducer function
export const { setLoading, setStartedFrom, setNoMoreAlbums, addAlbums, addAlbum } =
    albumsSlice.actions;

export default albumsSlice.reducer;
