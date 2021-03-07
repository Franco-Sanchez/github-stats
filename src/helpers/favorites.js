const getFavorite = (favorites, data) => favorites.find(favorite => favorite.id === data.id)

const toggleFavorite = (favorites, data, setFavorites) => {
  const favorite = getFavorite(favorites, data)
  if(favorite) {
    favorites = favorites.filter(favorite => favorite.id !== data.id)
  } else {
    favorites = [...favorites, data]
  }
  setFavorites(favorites)
};

export { getFavorite, toggleFavorite };