import {createSlice} from '@reduxjs/toolkit';

export const allSkillSlice = createSlice({
    name: "allSkillData",
    initialState: {
        skills: []
    },
    reducers: {
        setAllSkillData: (state, action) => {
            state.skills = action.payload;
        }
    }
})

export const {setAllSkillData} = allSkillSlice.actions;

export default allSkillSlice.reducer;