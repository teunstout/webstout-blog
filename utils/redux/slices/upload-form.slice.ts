import { createSlice } from "@reduxjs/toolkit";

export interface UploadFormInterface {
    title: string;
    subtitle: string;
    startDate: string;
    endDate: string;
    images: string[];
    banner: string;
}

const initialState: UploadFormInterface = {
    title: "",
    subtitle: "",
    startDate: "",
    endDate: "",
    images: [],
    banner: "",
};

export const uploadFormSlice = createSlice({
    name: "form-slice",
    initialState: initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setSubtitle: (state, action) => {
            state.subtitle = action.payload;
        },
        setStartDate: (state, action) => {
            state.startDate = action.payload;
        },
        setEndDate: (state, action) => {
            state.endDate = action.payload;
        },
        setImages: (state, action) => {
            state.images = action.payload;
        },
        updateImages: (state, action) => {
            state.images = [...state.images, action.payload];
        },
        setBanner: (state, action) => {
            state.banner = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setTitle,
    setSubtitle,
    setStartDate,
    setEndDate,
    setImages,
    updateImages,
    setBanner,
} = uploadFormSlice.actions;

export default uploadFormSlice.reducer;
