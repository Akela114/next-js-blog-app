import type { RootState } from '@/shared/config/store/types'

export const value = (state: RootState) => state.search.value || ''
