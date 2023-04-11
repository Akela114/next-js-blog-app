import { configureStore } from '@reduxjs/toolkit'

import { searchModel } from '@/entities/search'

const store = configureStore({
  reducer: {
    search: searchModel.reducer,
  },
})

export default store
