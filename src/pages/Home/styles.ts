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

export const ListCards = styled.section`
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;

    padding: 2rem 0 10rem 0;  
    
    h2 {
        font-family: 'Baloo 2', cursive;
        font-size: 2rem;
        font-weight: 800;
        line-height: 41.6px;
        color: ${({ theme }) => theme['base-subtitle']};

        margin-bottom: 3.375rem;
    }
`

export const ListCardsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem 2rem;
`

export const CoffeeCard = styled.div`
    background-color: ${({ theme }) => theme['base-card']};

    display: flex;
    flex-direction: column;
    align-items: center;

    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 6px;

    padding: 1.25rem 1.5rem;

    img {
        width: 7.5rem;
        height: 7.5rem;

        margin-top: -2.5rem;
        margin-bottom: 0.75rem;
    }

    h4 {
        font-family: 'Baloo 2', cursive;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 26px;
        color: ${({ theme }) => theme['base-subtitle']};

        margin-top: 1rem;
    }

    p {
        max-width: 13.5rem;
        font-size: 0.875rem;
        line-height: 18.2px;
        text-align: center;
        color: ${({ theme }) => theme['base-label']};

        margin-top: 0.5rem;
        margin-bottom: 2rem;
    }
`

export const Badge = styled.span`
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 13px;
    text-transform: uppercase;
    color: ${({ theme }) => theme['yellow-dark']};

    background-color: ${({ theme }) => theme['yellow-light']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
`

export const Price = styled.span`
    font-size: 0.875rem;
    line-height: 18.2px;

    strong {
        font-family: 'Baloo 2', cursive;
        font-size: 1.5rem;
        font-weight: 800;
        line-height: 31.2px;
    }
`

export const PriceAmountArea = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const PriceAmountActions = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const AddCardButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme['purple-dark']};
    border: 0;
    border-radius: 6px;

    padding: 0.5rem;
`