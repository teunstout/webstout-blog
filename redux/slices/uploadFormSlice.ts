import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ImageInterface {
    filename: string;
    url: string;
}

export interface UploadFormInterface {
    title: string;
    subtitle: string;
    startDate: string;
    endDate: string;
    images: ImageInterface[];
    banner: ImageInterface;
}

const initialState: UploadFormInterface = {
    title: "",
    subtitle: "",
    startDate: "",
    endDate: "",
    images: [],
    banner: {
        filename: "",
        url: "",
    },
};

export const uploadFormSlice = createSlice({
    name: "form-slice",
    initialState: initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setSubtitle: (state, action: PayloadAction<string>) => {
            state.subtitle = action.payload;
        },
        setStartDate: (state, action: PayloadAction<string>) => {
            state.startDate = action.payload;
        },
        setEndDate: (state, action: PayloadAction<string>) => {
            state.endDate = action.payload;
        },
        setImages: (state, action: PayloadAction<ImageInterface[]>) => {
            state.images = action.payload;
        },
        updateImages: (state, action: PayloadAction<ImageInterface[]>) => {
            state.images = [...state.images, ...action.payload];
        },
        setBanner: (state, action: PayloadAction<ImageInterface>) => {
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
