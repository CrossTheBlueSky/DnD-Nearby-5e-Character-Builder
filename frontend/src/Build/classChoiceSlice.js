import {createSlice} from '@reduxjs/toolkit';

export const classChoiceSlice = createSlice({
    name: "class",
    initialState: {
        class: ""
    },
    reducers: {
        setClassChoice: (state, action) => {
            state.class = action.payload;
        }
    }
})

export const {setClassChoice} = classChoiceSlice.actions;

export default classChoiceSlice.reducer;