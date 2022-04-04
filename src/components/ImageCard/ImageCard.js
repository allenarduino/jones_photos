import React from 'react';
import { AddText, CardWrapper, IconWrapper, Img } from './styles';
import * as Icon from 'react-feather';

export const ImageCard = ({ img_url }) => {
  return (
    <CardWrapper>
      <Img src={img_url} />
      <IconWrapper>
        <Icon.Heart size={25} color="#fff" style={{ marginRight: '50%' }} />
        <AddText>Add</AddText>
      </IconWrapper>
    </CardWrapper>
  );
};
