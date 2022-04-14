import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ImageInterface {
    filename: string;
    lastModified: number;
    url: string;
}

export interface UploadFormInterface {
    title: string;
    subtitle: string;
    startDate: string;
    endDate: string;
    images: ImageInterface[];
    banner: ImageInterface;
    createdAt: string;
}

const initialState: UploadFormInterface = {
    title: "",
    subtitle: "",
    startDate: "",
    endDate: "",
    images: [],
    banner: {
        filename: "",
        lastModified: 0,
        url: "",
    },
    createdAt: "",
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
            state.images.forEach(img => URL.revokeObjectURL(img.url));
            const images = action.payload.sort((a, b) => a.lastModified - b.lastModified);
            state.images = images;
        },
        updateImages: (state, action: PayloadAction<ImageInterface[]>) => {
            const images = [...state.images, ...action.payload].sort(
                (a, b) => a.lastModified - b.lastModified
            );
            state.images = images;
        },
        setBanner: (state, action: PayloadAction<ImageInterface>) => {
            state.banner = action.payload;
        },
        setCreatedAt: (state, action: PayloadAction<string>) => {
            state.createdAt = action.payload;
        },
        resetUploadFormState: (state, action: Action) => {
            state.title = initialState.title;
            state.subtitle = initialState.subtitle;
            state.startDate = initialState.startDate;
            state.endDate = initialState.endDate;
            state.banner = initialState.banner;
            state.images = initialState.images;
            state.createdAt = initialState.createdAt;
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
    resetUploadFormState,
    setCreatedAt,
} = uploadFormSlice.actions;

export default uploadFormSlice.reducer;
