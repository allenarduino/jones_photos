import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderDesign = styled.header`
  @media (max-width: ${769}px) {
    display: none;
  }
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  background-color: #fff;
  display: flex;
  box-shadow: 0px 0px 2px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export const Spacer = styled.div`
  flex: 1;
  display: flex;
`;

export const HeaderRight = styled.div`
  @media (max-width: ${769}px) {
    display: none;
  }
  display: flex;
  flex-direction: row;
  margin-right: 100px;
  width: 200px;
  justify-content: space-around;
`;

export const LinkStyle = styled.a`
  text-decoration: none;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #333;
  &:hover {
    color: #333;
    border-bottom: 2px solid #333;
  }
`;

export const StyledLink2 = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #333;
  border-bottom: 2px solid #333;
`;
