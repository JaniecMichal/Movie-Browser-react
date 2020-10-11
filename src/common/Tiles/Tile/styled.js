import styled, { css } from 'styled-components';

export const StyledTile = styled.div`
    max-width: 324px;
    display: flex;
    flex-direction: column;
    padding: 16px 16px 5px 16px;
    justify-content: flex-start;  
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

    @media (max-width: ${({ theme }) => theme.media.tablet}){
      flex-direction: row;
    }
`;

export const TileInnerWrapper = styled.div`
    margin: 0;
    padding: 0;

    ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    `}
`;