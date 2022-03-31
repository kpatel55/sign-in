import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: '',
    },
    reducers: {
        setUsername: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setUsername } = userSlice.actions

export default userSlice.reducer