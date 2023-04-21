import styled from 'styled-components'
import { PropsHighlight } from './index'

export const HighlightItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.875rem;

    span {
        font-size: 1rem;
        line-height: 20.8px;
    }
`

type Props = {
    colorBg: "shop" | "package" | "watch" | "coffee" 
}

const colorsIcons = {
    shop: "yellow-dark",
    package: "base-text",
    watch: "yellow",
    coffee: "purple"
} as const

export const HighlightIcon = styled.div<Props>`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, colorBg }) => theme[colorsIcons[colorBg]]};
`