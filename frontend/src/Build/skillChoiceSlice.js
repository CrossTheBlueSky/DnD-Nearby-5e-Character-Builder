import {createSlice} from '@reduxjs/toolkit';

export const skillChoiceSlice = createSlice({
    name: "skill",
    initialState: {
        skill: ""
    },
    reducers: {
        setSkillChoice: (state, action) => {
            state.skill = action.payload;
        }
    }
})

export const {setSkillChoice} = skillChoiceSlice.actions;

export default skillChoiceSlice.reducer;