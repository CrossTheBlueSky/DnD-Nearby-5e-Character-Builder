import {createSlice} from '@reduxjs/toolkit';

export const backgroundChoiceSlice = createSlice({
    name: "background",
    initialState: {
        background: ""
    },
    reducers: {
        setBackgroundChoice: (state, action) => {
            state.background = action.payload;
        }
    }
})

export const {setBackgroundChoice} = backgroundChoiceSlice.actions;

export default backgroundChoiceSlice.reducer;