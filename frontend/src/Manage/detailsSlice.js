import {createSlice} from '@reduxjs/toolkit';

export const detailsSlice = createSlice({
    name: "details",
    initialState: {
        name: "",
        gender: "",
        age: "",
        height: "",
        weight: "",
        alignment: "",
        deity: "",
        adventuringCompany: "",
        playerName: ""
        
    },
    reducers: {
        setDetails: (state, action) => {
            state.details = action.payload;
        }
    }
})

export const {setDetails} = detailsSlice.actions;

export default detailsSlice.reducer;