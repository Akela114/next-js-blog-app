'use client'
import { useState, useEffect } from 'react'

import { SORTING_TYPES } from './constants'
import type { TItem } from '../types'

const cloneItems = (items: TItem[]) =>
  items.map(item => {
    const newItem = {
      ...item,
      article: { ...item.article },
    }
    if (item.author) {
      newItem.author = { ...item.author }
    }
    return newItem
  })

export const useItemsSorting = (items: TItem[]) => {
  const [sortingType, setSortingType] = useState(SORTING_TYPES.titleAsc)
  const [sortedItems, setSortedItems] = useState(items)

  useEffect(() => {
    setSortedItems(prevItems => {
      const sortedItems = cloneItems(prevItems).filter(sortedItem =>
        items.some(newItem => newItem.article.id === sortedItem.article.id)
      )
      const newItems = items.filter(
        item =>
          !sortedItems.some(
            sortedItem => sortedItem.article.id === item.article.id
          )
      )
      return [...sortedItems, ...newItems]
    })
  }, [items])

  useEffect(() => {
    switch (sortingType) {
      case SORTING_TYPES.titleAsc:
        setSortedItems(prevItems =>
          cloneItems(prevItems).sort((firstItem, secondItem) => {
            if (firstItem.article.title > secondItem.article.title) {
              return 1
            }
            if (firstItem.article.title < secondItem.article.title) {
              return -1
            }
            return firstItem.article.tag > secondItem.article.tag ? 1 : -1
          })
        )
        break
      case SORTING_TYPES.titleDesc:
        setSortedItems(prevItems =>
          cloneItems(prevItems).sort((firstItem, secondItem) => {
            if (firstItem.article.title < secondItem.article.title) {
              return 1
            }
            if (firstItem.article.title > secondItem.article.title) {
              return -1
            }
            return firstItem.article.tag > secondItem.article.tag ? 1 : -1
          })
        )
        break
      case SORTING_TYPES.tagAsc:
        setSortedItems(prevItems =>
          cloneItems(prevItems).sort((firstItem, secondItem) => {
            if (firstItem.article.tag > secondItem.article.tag) {
              return 1
            }
            if (firstItem.article.tag < secondItem.article.tag) {
              return -1
            }
            return firstItem.article.title > secondItem.article.title ? 1 : -1
          })
        )
        break
      case SORTING_TYPES.tagDesc:
        setSortedItems(prevItems =>
          cloneItems(prevItems).sort((firstItem, secondItem) => {
            if (firstItem.article.tag < secondItem.article.tag) {
              return 1
            }
            if (firstItem.article.tag > secondItem.article.tag) {
              return -1
            }
            return firstItem.article.title > secondItem.article.title ? 1 : -1
          })
        )
        break
    }
  }, [sortingType])

  const handleTitleSorting = () =>
    setSortingType(prevType =>
      prevType === SORTING_TYPES.titleAsc
        ? SORTING_TYPES.titleDesc
        : SORTING_TYPES.titleAsc
    )

  const handleTagSorting = () =>
    setSortingType(prevType =>
      prevType === SORTING_TYPES.tagAsc
        ? SORTING_TYPES.tagDesc
        : SORTING_TYPES.tagAsc
    )

  return {
    sortedItems,
    handleTagSorting,
    handleTitleSorting,
  }
}
