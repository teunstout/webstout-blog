import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AlbumInterface {
    title: string;
    subtitle: string;
    startDate: string;
    endDate: string;
    image: string[];
    banner: string;
}

const initialState: AlbumInterface = {
    title: "",
    subtitle: "",
    startDate: "",
    endDate: "",
    image: [],
    banner: "",
};

export const albumSlice = createSlice({
    name: "album-slice",
    initialState: [],
    reducers: {
        setAlbumsWithoutImages: (state, action: PayloadAction<AlbumInterface[]>) => {},
        // setAllButImages: (state, action: PayloadAction<AlbumInterface>) => {
        //     state.title = action.payload.title;
        //     state.subtitle = action.payload.subtitle;
        //     state.startDate = action.payload.startDate;
        //     state.endDate = action.payload.endDate;
        //     state.banner = action.payload.banner;
        // },
        setBanner: (state, action: PayloadAction<AlbumInterface>) => {
            // state.images = action.payload.images;
        },
    },
});

// Action creators are generated for each case reducer function
export const {} = albumSlice.actions;

export default albumSlice.reducer;
