import React from 'react';
import { StyledLink } from './styles';
import { HeaderDesign, HeaderRight, Spacer, StyledLink2 } from './styles';
import { useLocation } from 'react-router-dom';

const DeskTopHeader = () => {
  const location = useLocation();
  return (
    <div>
      <HeaderDesign>
        <b
          style={{
            display: 'flex',
            alignSelf: 'center',
            fontSize: 25,
          }}
        >
          JonesPhotos
        </b>
        <Spacer></Spacer>
        <HeaderRight>
          {location.pathname == '/' ? (
            <StyledLink2>Home</StyledLink2>
          ) : (
            <StyledLink to="/">Home</StyledLink>
          )}
          {location.pathname == '/favourites' ? (
            <StyledLink2>Favourites</StyledLink2>
          ) : (
            <StyledLink to="/favourites">Favourites</StyledLink>
          )}
        </HeaderRight>
      </HeaderDesign>
    </div>
  );
};

export default DeskTopHeader;
