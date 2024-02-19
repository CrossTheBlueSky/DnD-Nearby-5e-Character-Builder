import {createSlice} from '@reduxjs/toolkit';

export const raceChoiceSlice = createSlice({
    name: "race",
    initialState: {
        race: ""
    },
    reducers: {
        setRaceChoice: (state, action) => {
            state.race = action.payload;
        }
    }
})

export const {setRaceChoice} = raceChoiceSlice.actions;

export default raceChoiceSlice.reducer;