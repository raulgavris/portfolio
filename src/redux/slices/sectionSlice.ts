import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  about: '',
  blog: '',
  contact: '',
  home: '',
  portfolio: '',
  container: '',
  active: '',
}

export const SectionSlice = createSlice({
  name: 'SectionSlice',
  initialState,
  reducers: {
    updateAbout: (state, action) => {
      state.about = action.payload
    },
    updateBlog: (state, action) => {
      state.blog = action.payload
    },
    updateContact: (state, action) => {
      state.contact = action.payload
    },
    updateHome: (state, action) => {
      state.home = action.payload
    },
    updatePortfolio: (state, action) => {
      state.portfolio = action.payload
    },
    updateContainer: (state, action) => {
      state.container = action.payload
    },
    updateActive: (state, action) => {
      state.active = action.payload
    },
  },
})
