interface IStorageKeys {
  theme: 'dark' | 'light'
}

export const saveToStorage = (pairs: IStorageKeys) => {
  if (typeof window !== 'undefined') {
    Object.entries(pairs).forEach(([key, value]) =>
      window.localStorage.setItem(key, value)
    )
  }
}

export const getFromStorage = (key: keyof IStorageKeys) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key)
  }
}
