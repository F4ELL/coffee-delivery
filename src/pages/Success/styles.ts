import styled from 'styled-components'

export const SuccessContainer = styled.main`
    width: 100%;
`

export const ConfirmationOrderArea = styled.div`
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;

    padding: 5rem 0;

    h1 {
        font-family: 'Baloo 2', cursive;
        font-size: 2rem;
        font-weight: 800;
        line-height: 41.6px;
        color: ${({ theme }) => theme['yellow-dark']};

        margin-bottom: 0.25rem;
    }

    p {
        font-size: 1.25rem;
        line-height: 26px;
        color: ${({ theme }) => theme['base-subtitle']};

        margin-bottom: 2.5rem;
    }
`

export const ConfirmationOrderContent = styled.div`
    display: grid;
    grid-template-columns: 32.875rem 1fr;
    gap: 6.375rem;
`

export const ListInfosOrder = styled.div`
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 6px;
    border: 1px solid ${({ theme }) => theme.purple};

    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2.5rem;
`

export const InfoOrderCard = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export type Props = {
    variant: "location" | "time" | "payment"
}

const colorsIcons = {
    location: "purple",
    time: "yellow",
    payment: "yellow-dark",
} as const

export const InfoCardIcon = styled.div<Props>`
    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, variant }) => theme[colorsIcons[variant]]};
    border-radius: 50%;
`

export const InfoCardText = styled.div`
    display: flex;
    flex-direction: column;

    span {
        line-height: 20.8px;
    }
`