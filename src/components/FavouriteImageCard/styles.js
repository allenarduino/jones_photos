import styled from 'styled-components';

export const CardWrapper = styled.div`
  height: 450px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  margin: 0.2em;
  padding: 0;

  @media (max-width: ${400}px) {
    height: 400px;
    margin: 0.2em;
  }

  @media (min-width: ${1500}px) {
    height: 500px;
    margin: 0.2em;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(70%);
`;

export const AddText = styled.b`
  font-size: 15px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  color: red;
  bottom: 20px;
  cursor: pointer;
  right: 10px;
  display: flex;
  flex-direction: column;
`;
