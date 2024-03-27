import {createSlice} from '@reduxjs/toolkit';

export const manageTabSlice = createSlice({
    name: "manageTab",
    initialState: {
        manageTab: "Details"
    },
    reducers: {
        setManageTab: (state, action) => {
            state.manageTab = action.payload;
        }
    }
})

export const {setManageTab} = manageTabSlice.actions;

export default manageTabSlice.reducer;