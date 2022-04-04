import React from 'react';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { Constants } from '../../constants';
import { FavouritesContext } from '../../contexts/FavouriteContextProvider';
import { PhotoContext } from '../../contexts/PhotoContextProvider';
import { addToStorage } from '../../services/localStorageService';
import { GridWrapper } from './styles';

const Photos = () => {
  const { photo_state, photo_dispatch } = React.useContext(PhotoContext);
  const { favourite_state } = React.useContext(FavouritesContext);

  const fetchPhotos = () => {
    fetch(`${Constants.baseURL}/photos/?client_id=${process.env.REACT_APP_client_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        photo_dispatch({ type: 'FETCH_PHOTOS', payload: data });
      });
  };

  const addToFavourites = async (photo) => {
    await addToStorage(photo, favourite_state.favourites);
    photo_dispatch({ action: 'ADD_TO_FAVOURITES', payload: photo });
    await alert(photo);
  };

  React.useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <>
      <GridWrapper>
        {photo_state.photos.map((img) => (
          <>
            <ImageCard img_url={img.urls.raw} onClick={() => addToFavourites(img)} />
          </>
        ))}
      </GridWrapper>
    </>
  );
};

export default Photos;
