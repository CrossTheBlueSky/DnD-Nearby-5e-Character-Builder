import { configureStore } from '@reduxjs/toolkit'
import classReducer from '../Build/classChoiceSlice'
import buildTabReducer from '../Build/buildTabSlice'
import allClassReducer from '../Build/allClassSlice'

export default configureStore({
  reducer: {
    class: classReducer,
    buildTab: buildTabReducer,
    allClassData: allClassReducer
  }
})