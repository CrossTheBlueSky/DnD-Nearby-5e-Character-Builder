import {createSlice} from '@reduxjs/toolkit';

export const allFeatSlice = createSlice({
    name: "allFeatData",
    initialState: {
        feats: []
    },
    reducers: {
        setAllFeatData: (state, action) => {
            state.feats = action.payload;
        }
    }
})

export const {setAllFeatData} = allFeatSlice.actions;

export default allFeatSlice.reducer;