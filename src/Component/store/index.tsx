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

const toggleMenuSlice = createSlice({
    name: 'toggleMenu',
    initialState: {isToggled: false},
    reducers: {
        toggle(state){
            state.isToggled = !state.isToggled
        },

        toggleFalse(state){
            state.isToggled = false
        }
    }
})

const store = configureStore({
    reducer: { error: errorSlice.reducer, toggle: toggleMenuSlice.reducer }
})

export const errorAction = errorSlice.actions;
export const emailAction = errorSlice.actions;
export const toggleAction = toggleMenuSlice.actions

export default store