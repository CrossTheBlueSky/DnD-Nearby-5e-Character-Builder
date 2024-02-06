import {createSlice} from '@reduxjs/toolkit';

export const buildTabSlice = createSlice({
    name: "buildTab",
    initialState: {
        buildTab: "Class"
    },
    reducers: {
        setBuildTab: (state, action) => {
            state.buildTab = action.payload;
        }
    }
})

export const {setBuildTab} = buildTabSlice.actions;

export default buildTabSlice.reducer;