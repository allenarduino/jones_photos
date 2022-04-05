import styled from 'styled-components';

export const GridWrapper = styled.div`
  text-align: center;
  margin-top: 1em;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.1em;
  @media (max-width: ${580}px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${1500}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const PageLabel = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-top: 100px;
`;

export const Message = styled.div`
  margin-top: 200px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;
