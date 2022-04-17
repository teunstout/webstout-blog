import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInterface {
    loggedIn: boolean;
    admin: boolean;
    email: string;
}

const initialState: UserInterface = {
    loggedIn: false,
    admin: false,
    email: "",
};

export const userSlice = createSlice({
    name: "user-slice",
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.loggedIn = true;
            state.email = action.payload;
            state.admin = action.payload === "teunstout@hotmail.com";
        },
        removeUser: (state, action: Action) => {
            state = {
                loggedIn: false,
                admin: false,
                email: "",
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
