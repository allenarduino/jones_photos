import React from 'react';
import { photoReducer } from '../reducers/PhotoReducer';

export const PhotoContext = React.createContext();
const initialState = {
  photos: [],
};

const PhotoContextProvider = (props) => {
  const [photo_state, photo_dispatch] = React.useReducer(photoReducer, initialState);

  return (
    <PhotoContext.Provider value={{ photo_state, photo_dispatch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};
export default PhotoContextProvider;
