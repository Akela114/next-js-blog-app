import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

interface ISearchSliceState {
  value: string
}

const initialState: ISearchSliceState = {
  value: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchValue(state, action: PayloadAction<string>) {
      state.value = action.payload
    },
  },
})

export const actions = searchSlice.actions
export const reducer = searchSlice.reducer
