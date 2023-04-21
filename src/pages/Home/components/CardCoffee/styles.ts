import styled from 'styled-components'

export const CardCoffeeContainer = styled.div`
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
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.purple};
        transition: all ease 0.2s;
    }
`