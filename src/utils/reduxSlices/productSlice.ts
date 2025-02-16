import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CommentType } from '../../vstTypes'

export interface productState {
    id: string
    comments: CommentType[]
}

const initialState: productState = {
    id: '',
    comments: []
}

export const productSlice = createSlice({
    name: 'product',

    initialState,

    reducers: {
        resetProduct: () => {
            return initialState;
        },
        setId: (state, action: PayloadAction<string>) => {
            return { ...state, id: action.payload };
        },
        setCommentsInStore: (state, action: PayloadAction<CommentType[]>) => {
            return { ...state, comments: action.payload };
        },
        addCommentInStore: (state, action: PayloadAction<CommentType>) => {
            state.comments.unshift(action.payload);
        }
    }
})

export const { resetProduct, setId, setCommentsInStore, addCommentInStore} = productSlice.actions;
export default productSlice.reducer;