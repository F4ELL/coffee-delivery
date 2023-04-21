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

export const BannerHighlights = styled.div`
    display: grid;
    grid-template-columns: 16rem 1fr;
    gap: 1.25rem;

    margin-top: 4.125rem;
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

