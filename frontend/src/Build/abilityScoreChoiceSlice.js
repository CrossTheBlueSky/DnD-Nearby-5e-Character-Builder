import {createSlice} from '@reduxjs/toolkit';

export const abilityScoreChoiceSlice = createSlice({
    name: "abilityScores",
    initialState: {
        abilityScores: {}
    },
    reducers: {
        setAbilityScoreChoice: (state, action) => {
            state.abilityScores = action.payload;
        }
    }
})

export const {setAbilityScoreChoice} = abilityScoreChoiceSlice.actions;
export default abilityScoreChoiceSlice.reducer;