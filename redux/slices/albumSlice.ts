import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AlbumInterface = {
    id: "",
    title: "",
    subtitle: "",
    startDate: "",
    endDate: "",
    images: [],
    banner: "",
};

export interface AlbumInterface {
    id: string;
    title: string;
    subtitle: string;
    startDate: string;
    endDate: string;
    images: string[];
    banner: string;
}

export const albumSlice = createSlice({
    name: "album-slice",
    initialState: initialState,
    reducers: {
        setAlbum: (state, action: PayloadAction<AlbumInterface>) => {
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.subtitle = action.payload.subtitle;
            state.startDate = action.payload.startDate;
            state.endDate = action.payload.endDate;
            state.images = action.payload.images;
            state.banner = action.payload.banner;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setAlbum } = albumSlice.actions;

export default albumSlice.reducer;
