import {createSlice} from '@reduxjs/toolkit';

export const featChoiceSlice = createSlice({
    name: "feat",
    initialState: {
        feat: ""
    },
    reducers: {
        setFeatChoice: (state, action) => {
            state.feat = action.payload;
        }
    }
})

export const {setFeatChoice} = featChoiceSlice.actions;

export default featChoiceSlice.reducer;