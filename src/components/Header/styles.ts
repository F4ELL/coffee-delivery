import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;

    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderButtonsArea = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export const BaseHeaderButton = styled.button`
    padding: 0.5rem;

    border: 0;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 0.25rem;
`

export const LocationButton = styled(BaseHeaderButton)`
    background-color: ${({ theme }) => theme['purple-light']};
    color: ${({ theme }) => theme['purple-dark']};

    font-size: 0.875rem;
`

export const ShopButton = styled(BaseHeaderButton)`
    background-color: ${({ theme }) => theme['yellow-light']};
`