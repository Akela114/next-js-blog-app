import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

interface IThemeSliceState {
  value: 'light' | 'dark'
}

const initialState: IThemeSliceState = {
  value: 'light',
}

const themeSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    switchThemeValue(state) {
      state.value = state.value === 'light' ? 'dark' : 'light'
    },
  },
})

export const actions = themeSlice.actions
export const reducer = themeSlice.reducer
