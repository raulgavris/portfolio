import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { SectionSlice } from './slices'

const rootReducer = combineReducers({
  SectionSlice: SectionSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const {
  updateAbout,
  updateBlog,
  updateContact,
  updateHome,
  updatePortfolio,
  updateContainer,
  updateActive,
} = SectionSlice.actions

export default store
