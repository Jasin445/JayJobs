import { configureStore, createSlice } from "@reduxjs/toolkit"


const errorSlice = createSlice({
    name: 'oobCode',
    initialState: { error: null, email: null },
    reducers: {
        setError(state, action) {
            state.error = action.payload
        },
        setEmail(state, action) {
            state.email = action.payload
        },

    }
})

const store = configureStore({
    reducer: { error: errorSlice.reducer }
})

export const errorAction = errorSlice.actions;
export const emailAction = errorSlice.actions;

export default store