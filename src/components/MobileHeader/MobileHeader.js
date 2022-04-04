import React from 'react';
import { HeaderDesign, Spacer, HeaderRight, StyledLink, StyledLink2 } from './styles';
import * as Icon from 'react-feather';
import { useLocation } from 'react-router-dom';

const MobileHeader = () => {
  const location = useLocation();
  return (
    <div>
      <HeaderDesign>
        <b
          style={{
            display: 'flex',
            alignSelf: 'center',
          }}
        >
          JonesPhotos
        </b>
        <Spacer></Spacer>

        <HeaderRight>
          {location.pathname == '/' ? (
            <StyledLink2 to="/">
              <Icon.Home />
            </StyledLink2>
          ) : (
            <StyledLink to="/">
              <Icon.Home />
            </StyledLink>
          )}
          {location.pathname == '/favourites' ? (
            <StyledLink2 to="/favourites">
              <Icon.Heart />
            </StyledLink2>
          ) : (
            <StyledLink to="/favourites">
              <Icon.Heart />
            </StyledLink>
          )}
        </HeaderRight>
      </HeaderDesign>
    </div>
  );
};

export default MobileHeader;
