import React from 'react';
import { favouritesReducer } from '../reducers/FavouritesReducer';

export const FavouritesContext = React.createContext();
const initialState = {
  favourites: [],
};

const FavouritesContextProvider = (props) => {
  const [favourite_state, favourite_dispatch] = React.useReducer(favouritesReducer, initialState);

  return (
    <FavouritesContext.Provider value={{ favourite_state, favourite_dispatch }}>
      {props.children}
    </FavouritesContext.Provider>
  );
};
export default FavouritesContextProvider;
