import styled, { css } from "styled-components";

export const StyledTilesContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  height: auto;
  padding: 15px;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: 1fr;
  }
  ${({ people }) =>
    people &&
    css`
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 20px;

      @media (max-width: ${({ theme }) => theme.media.tablet}) {
        grid-template-columns: repeat(4, 1fr);
      }
      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        grid-template-columns: repeat(2, 45%);
      }
    `}
`;
export const StyledTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  justify-self: start;
  margin: 0px;
  grid-column: 1 / -1;
`;
