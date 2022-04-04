import React from 'react';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { Constants } from '../../constants';
import { PhotoContext } from '../../contexts/PhotoContextProvider';
import { GridWrapper, PageLabel } from './styles';
import { Fade } from 'react-reveal';

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
      <Fade bottom duration={900} distance="40px">
        <PageLabel>Photos</PageLabel>
        <GridWrapper>
          {photo_state.photos.map((img) => (
            <ImageCard img_url={img.urls.raw} img={img} />
          ))}
        </GridWrapper>
      </Fade>
    </React.Fragment>
  );
};

export default Photos;
