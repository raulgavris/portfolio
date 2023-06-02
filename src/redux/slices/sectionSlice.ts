import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState: SectionSlice = {
  about: React.createRef<HTMLDivElement>(),
  blog: React.createRef<HTMLDivElement>(),
  contact: React.createRef<HTMLDivElement>(),
  home: React.createRef<HTMLDivElement>(),
  portfolio: React.createRef<HTMLDivElement>(),
  container: React.createRef<HTMLDivElement>(),
  active: '/home',
}

export const SectionSlice = createSlice({
  name: 'sectionSlice',
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
