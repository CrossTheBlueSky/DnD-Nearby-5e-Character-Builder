import {createSlice} from '@reduxjs/toolkit';

export const allClassSlice = createSlice({
    name: "allClassData",
    initialState: {
        classes: []
    },
    reducers: {
        setAllClassData: (state, action) => {
            state.classes = action.payload;
        }
    }
})

export const {setAllClassData} = allClassSlice.actions;

export default allClassSlice.reducer;