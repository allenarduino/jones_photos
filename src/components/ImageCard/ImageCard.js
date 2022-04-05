import React from 'react';
import { AddText, CardWrapper, IconWrapper, Img } from './styles';
import * as Icon from 'react-feather';
import { FavouritesContext } from '../../contexts/FavouriteContextProvider';
import { addToStorage } from '../../services/localStorageService';
import { checkItem } from '../../services/localStorageService';

export const ImageCard = ({ img_url, img }) => {
  const { favourite_state, favourite_dispatch } = React.useContext(FavouritesContext);

  const addToFavourites = (photo) => {
    favourite_dispatch({ type: 'ADD_TO_FAVOURITES', payload: photo });
    addToStorage(photo, favourite_state.favourites);
  };

  return (
    <CardWrapper>
      <Img src={img_url} />

      {checkItem(img.id) ? (
        <IconWrapper>
          <Icon.CheckCircle size={25} color="#fff" style={{ marginRight: '50%' }} />
          <AddText>Added</AddText>
        </IconWrapper>
      ) : (
        <IconWrapper onClick={() => addToFavourites(img)}>
          <Icon.Heart size={25} color="#fff" style={{ marginRight: '50%' }} />
          <AddText>Add</AddText>
        </IconWrapper>
      )}
    </CardWrapper>
  );
};
