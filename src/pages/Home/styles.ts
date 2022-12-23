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