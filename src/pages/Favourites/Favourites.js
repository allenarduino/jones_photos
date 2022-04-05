import React from 'react';
import { FavouriteImageCard } from '../../components/FavouriteImageCard/FavouriteImageCard';
import { GridWrapper, Message, PageLabel } from './styles';
import { fetchFromStorage } from '../../services/localStorageService';
import { FavouritesContext } from '../../contexts/FavouriteContextProvider';
import { Fade } from 'react-reveal';

const Favourites = () => {
  const { favourite_state, favourite_dispatch } = React.useContext(FavouritesContext);
  const fetchFavouritePhotos = () => {
    let favourites = fetchFromStorage();
    favourite_dispatch({ type: 'FETCH_FAVOURITES', payload: favourites });
  };

  React.useEffect(() => {
    fetchFavouritePhotos();
  }, []);

  return (
    <React.Fragment>
      {favourite_state.favourites.length == 0 ? (
        <Message>No photo has been added</Message>
      ) : (
        <Fade bottom duration={900} distance="40px">
          <PageLabel>Favourites</PageLabel>
          <GridWrapper>
            {favourite_state.favourites.map((img) => (
              <FavouriteImageCard img_url={img.urls.raw} img={img} />
            ))}
          </GridWrapper>
        </Fade>
      )}
    </React.Fragment>
  );
};

export default Favourites;
