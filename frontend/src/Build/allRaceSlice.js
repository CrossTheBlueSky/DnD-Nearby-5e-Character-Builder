import {createSlice} from '@reduxjs/toolkit';

export const allRaceSlice = createSlice({
    name: "allRaceData",
    initialState: {
        races: []
    },
    reducers: {
        setAllRaceData: (state, action) => {
            state.races = action.payload;
        }
    }
})

export const {setAllRaceData} = allRaceSlice.actions;

export default allRaceSlice.reducer;