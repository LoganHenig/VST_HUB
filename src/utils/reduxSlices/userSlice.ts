import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface userState {
    email: string,
    givenName: string,
    familyName: string,
    emailVerified: boolean,
}

const initialState: userState = {
    email: '',
    givenName: '',
    familyName: '',
    emailVerified: false,
}

export const userSlice = createSlice({
    name: 'user',

    initialState,

    reducers: {
        resetUser: () => {
            return initialState;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            return { ...state, email: action.payload };
        },
        setGivenName: (state, action: PayloadAction<string>) => {
            return { ...state, givenName: action.payload };
        },
        setFamilyName: (state, action: PayloadAction<string>) => {
            return { ...state, familyName: action.payload };
        }
    }
})

export const { resetUser, setUserName, setFirstName, setLastName } = userSlice.actions;
export default userSlice.reducer;