import { configureStore } from '@reduxjs/toolkit'
import classReducer from '../Build/classChoiceSlice'
import buildTabReducer from '../Build/buildTabSlice'
import allClassReducer from '../Build/allClassSlice'
import allRaceReducer from '../Build/allRaceSlice'
import allFeatReducer from '../Build/allFeatSlice'
import allBackgroundReducer from '../Build/allBackgroundSlice'
import allSkillReducer from '../Build/allSkillSlice'
import raceReducer from '../Build/raceChoiceSlice'
import backgroundReducer from '../Build/backgroundChoiceSlice'
import featReducer from '../Build/featChoiceSlice'
import skillReducer from '../Build/skillChoiceSlice'
import abilityScoreReducer from '../Build/abilityScoreChoiceSlice'
import currentCharacterIdReducer from '../currentCharacterIdSlice'
import manageTabReducer from '../Manage/manageTabSlice'
import detailsReducer from '../Manage/detailsSlice'

export default configureStore({
  reducer: {
    class: classReducer,
    buildTab: buildTabReducer,
    allClassData: allClassReducer,
    allRaceData: allRaceReducer,
    allFeatData: allFeatReducer,
    allBackgroundData: allBackgroundReducer,
    allSkillData: allSkillReducer,
    race : raceReducer,
    background: backgroundReducer,
    feats: featReducer,
    skills: skillReducer,
    abilityScores: abilityScoreReducer,
    characterId: currentCharacterIdReducer,
    manageTab: manageTabReducer,
    details : detailsReducer,
    


  }
})