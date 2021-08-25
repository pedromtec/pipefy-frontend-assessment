import styled, { css } from 'styled-components'

type WrapperProps = {
    color?: string
}

const DEFAULT_WRAPPER_COLOR = '#3011OD'

export const Wrapper = styled.div<WrapperProps>`
    ${({color, theme}) => css`
        background-color: ${color ?? DEFAULT_WRAPPER_COLOR};
        width: 200px;
        height: 200px;
        border-radius: ${theme.border.radius};
    `}
` 

export const Info = styled.div`` 

export const Name = styled.h2`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.medium};
        line-height: ${theme.font.sizes.medium};
        font-weight: ${theme.font.bold};
        color: ${theme.colors.black};
  `}
` 

export const CardsCount = styled.h4`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.bold};
        color: ${theme.colors.gray};
  `}
`


