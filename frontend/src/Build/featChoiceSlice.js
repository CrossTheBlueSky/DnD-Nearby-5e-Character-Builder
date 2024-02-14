import {createSlice} from '@reduxjs/toolkit';

export const featChoiceSlice = createSlice({
    name: "feats",
    initialState: {
        feats: ""
    },
    reducers: {
        setFeatChoice: (state, action) => {
            state.feats = action.payload;
        }
    }
})

export const {setFeatChoice} = featChoiceSlice.actions;

export default featChoiceSlice.reducer;