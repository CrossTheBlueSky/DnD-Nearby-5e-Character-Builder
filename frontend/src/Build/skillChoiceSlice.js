import {createSlice} from '@reduxjs/toolkit';

export const skillChoiceSlice = createSlice({
    name: "skills",
    initialState: {
        skills: []
    },
    reducers: {
        setSkillChoice: (state, action) => {
            state.skills = action.payload;
        }
    }
})

export const {setSkillChoice} = skillChoiceSlice.actions;

export default skillChoiceSlice.reducer;