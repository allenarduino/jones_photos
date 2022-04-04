import React from 'react';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { Constants } from '../../constants';
import { PhotoContext } from '../../contexts/PhotoContextProvider';
import { GridWrapper, PageLabel } from './styles';

const Photos = () => {
  const { photo_state, photo_dispatch } = React.useContext(PhotoContext);

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

  React.useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <React.Fragment>
      <PageLabel>Photos</PageLabel>
      <GridWrapper>
        {photo_state.photos.map((img) => (
          <ImageCard img_url={img.urls.raw} img={img} />
        ))}
      </GridWrapper>
    </React.Fragment>
  );
};

export default Photos;
