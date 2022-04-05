import React from 'react';
import { AddText, CardWrapper, IconWrapper, Img } from './styles';
import * as Icon from 'react-feather';
import { FavouritesContext } from '../../contexts/FavouriteContextProvider';
import { removeFromStorage } from '../../services/localStorageService';

export const FavouriteImageCard = ({ img_url, img }) => {
  const { favourite_dispatch } = React.useContext(FavouritesContext);

  const removeImage = (id) => {
    favourite_dispatch({ type: 'REMOVE_FROM_FAVOURITES', payload: id });
    removeFromStorage(id);
  };
  return (
    <CardWrapper>
      <Img src={img_url} />
      <IconWrapper onClick={() => removeImage(img.id)}>
        <Icon.Trash size={25} color="red" style={{ marginRight: '50%' }} />
        <AddText>Remove</AddText>
      </IconWrapper>
    </CardWrapper>
  );
};
