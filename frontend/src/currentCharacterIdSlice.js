import {createSlice} from '@reduxjs/toolkit';

export const currentCharacterIdSlice = createSlice({
    name: "characterId",
    initialState: {
        characterId: ""
    },
    reducers: {
        setCharacterId: (state, action) => {
            state.characterId = action.payload;
        }
    }
})

export const {setCharacterId} = currentCharacterIdSlice.actions;

export default currentCharacterIdSlice.reducer;