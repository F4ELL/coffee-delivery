import styled from 'styled-components'
import EffectBg from '../../assets/bg-intro.png'

export const HomeContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const BannerIntro = styled.section`
    background: ${() => `url(${EffectBg}) no-repeat center`};
    background-size: cover;
`

export const BannerIntroContent = styled.div`
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    
    padding: 5.875rem 0;

    display: flex;
    gap: 3.5rem;
`

export const BannerTextArea = styled.div`
    width: 36.75rem;

    display: flex;
    flex-direction: column;

    h1 {
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
        font-weight: 800;
        color: ${({ theme }) => theme['base-title']};
        line-height: 62.4px;
    }

    p {
        font-size: 1.25rem;
        color: ${({ theme }) => theme['base-subtitle']};
        line-height: 26px;
        margin-top: 1rem;
    }
`

export const BannerQualities = styled.div`
    display: grid;
    grid-template-columns: 16rem 1fr;
    gap: 1.25rem;

    margin-top: 4.125rem;
`

export const BannerQualitiesItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.875rem;

    span {
        font-size: 1rem;
        line-height: 20.8px;
    }
`

export type Props = {
    variant: "shop" | "package" | "watch" | "coffee" 
}

const colorsIcons = {
    shop: "yellow-dark",
    package: "base-text",
    watch: "yellow",
    coffee: "purple"
} as const

export const BannerIcon = styled.div<Props>`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, variant }) => theme[colorsIcons[variant]]};
`