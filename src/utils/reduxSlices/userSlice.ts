import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface userState {
    userName: string,
    firstName: string,
    lastName: string,
}

const initialState: userState = {
    userName: '',
    firstName: '',
    lastName: '',
}

export const userSlice = createSlice({
    name: 'user',

    initialState,

    reducers: {
        resetUser: () => {
            return initialState;
        },
        setUserName: (state, action: PayloadAction<string>) => {
            return { ...state, userName: action.payload };
        },
        setFirstName: (state, action: PayloadAction<string>) => {
            return { ...state, firstName: action.payload };
        },
        setLastName: (state, action: PayloadAction<string>) => {
            return { ...state, lastName: action.payload };
        }
    }
})

export const { resetUser, setUserName, setFirstName, setLastName } = userSlice.actions;
export default userSlice.reducer;