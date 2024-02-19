import {createSlice} from '@reduxjs/toolkit';

export const allBackgroundSlice = createSlice({
    name: "allBackgroundData",
    initialState: {
        backgrounds: []
    },
    reducers: {
        setAllBackgroundData: (state, action) => {
            state.backgrounds = action.payload;
        }
    }
})

export const {setAllBackgroundData} = allBackgroundSlice.actions;

export default allBackgroundSlice.reducer;