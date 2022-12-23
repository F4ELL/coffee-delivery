import styled from 'styled-components'
import bgIntro from '../../assets/bg-intro.png'

export const HomeContainer = styled.main`
    max-width: 100%;
    height: 34rem;

    background-image: url(${bgIntro});

    display: flex;
    align-items: center;

    padding: 5.75rem 10rem;

    img {
        margin: 0 auto;
    }
`

export const Infos = styled.div`
    max-width: 36.75rem;
    
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 3rem;
        color: ${({ theme }) => theme['base-title']};
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        line-height: 130%;

        margin-bottom: 1rem;
    }

    p {
        font-size: 1.25rem;
        color: ${({ theme }) => theme['base-subtitle']};
        line-height: 26px;

        margin-bottom: 4.125rem;
    }
`

export const QualitiesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const QUALITIES_COLOR = {
    darkYellow: 'yellow-dark',
    yellow: 'yellow',
    gray: 'base-text',
    purple: 'purple',
} as const

interface QualitiesProps {
    bgColor: keyof typeof QUALITIES_COLOR
}

export const Qualities = styled.span<QualitiesProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    font-size: 1rem;
    line-height: 20.8px;

    margin-bottom: 1.25rem;

    span {
        width: 2rem;
        height: 2rem;

        background: ${({ theme, bgColor }) => theme[QUALITIES_COLOR[bgColor]]};
        
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
    }
`

export const CoffeeList = styled.section`
    width: 100%;

    margin: 0 auto;

    padding: 2rem 10rem;

    h3 {
        font-size: 2rem;
        font-weight: 800;
        font-family: 'Baloo 2', cursive;
        line-height: 41.6px;
        color: ${({ theme }) => theme['base-subtitle']};

        margin-bottom: 3.375rem;
    }
`

export const CardCoffee = styled.div`
    width: 16rem;
    height: 19,375rem;

    background: ${({ theme }) => theme['base-card']};
    border-radius: 6px 36px 6px 36px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1.25rem 1.5rem;

    img {
        margin-top: -2.5rem;
        margin-bottom: 0.75rem;
    }

    span {
        font-size: 0.625rem;
        font-weight: 700;
        line-height: 13px;
        color: ${({ theme }) => theme['yellow-dark']};
        background: ${({ theme }) => theme['yellow-light']};
        text-transform: uppercase;
        border-radius: 100px;

        padding: 0.25rem 0.5rem;
        margin-bottom: 1rem;
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 26px;
        font-family: 'Baloo 2', cursive;
        color: ${({ theme }) => theme['base-subtitle']};

        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.75rem;
        line-height: 18.2px;
        color: ${({ theme }) => theme['base-label']};
        text-align: center;

        margin-bottom: 0.5rem;
    }
`
