import styled from 'styled-components';

export const GridWrapper = styled.div`
  text-align: center;
  margin-top: 5em;
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
