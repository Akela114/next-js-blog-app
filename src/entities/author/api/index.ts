import api from '@/shared/config/api'

import type { IArticleAuthors } from '../types'

export const getAuthors = async () => {
  const authorsRes = await api.get('/authors')
  const authors: IArticleAuthors = {
    items: authorsRes.data,
    findById: function (id: number) {
      return this.items.find(author => author.id === id)
    },
  }

  return authors
}
