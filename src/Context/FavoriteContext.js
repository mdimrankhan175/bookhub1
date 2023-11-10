// FavoriteContext.js

import React, {createContext, useState} from 'react'

const FavoriteContext = createContext({
  favoriteList: [],
  onToggleFavorite: () => {},
})

export const FavoriteProvider = ({children}) => {
  const [favoriteList, setFavoriteList] = useState([])

  const onToggleFavorite = bookDetails => {
    const existingIndex = favoriteList.findIndex(
      item => item.id === bookDetails.id,
    )

    if (existingIndex !== -1) {
      // Remove from favorites if already present
      const updatedList = [...favoriteList]
      updatedList.splice(existingIndex, 1)
      setFavoriteList(updatedList)
    } else {
      // Add to favorites if not present
      setFavoriteList(prevList => [...prevList, bookDetails])
    }
  }

  const contextValue = {
    favoriteList,
    onToggleFavorite,
  }

  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteContext
