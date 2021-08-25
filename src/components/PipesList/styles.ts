import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({theme}) => css`
        max-width: ${theme.grid.container};
        margin: 0 auto;
        border-radius: ${theme.border.radius};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
` 

export const ListContainer = styled.ul`
    ${({theme}) => css`
        display: flex;
        flex-wrap: wrap;
        li {
            margin: ${theme.spacings.xsmall};
            list-style: none;
        }
    `}
` 
