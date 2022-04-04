import React from 'react';
import { FavouritesContext } from '../../contexts/FavouriteContextProvider';
import { fetchFromStorage } from '../../services/localStorageService';

const Favourites = () => {
  const { favourite_state, favourite_dispatch } = React.useContext(FavouritesContext);

  const fetchFavouritePhotos = () => {
    let favourites = fetchFromStorage();
    favourite_dispatch({ action: 'FETCH_FAVOURITES', payload: favourites });
  };

  React.useEffect(() => {
    fetchFavouritePhotos();
  }, []);

  return (
    <>
      {favourite_state.favourites.map((photo) => (
        <div>
          <img src={photo.urls.raw} />
        </div>
      ))}
    </>
  );
};

export default Favourites;
