import styled from 'styled-components'

export const HeaderContainer = styled.header`
    max-width: 100%;
    height: 6.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10rem;

    nav {
        display: flex;
        gap: 0.75rem;
    }
`

export const BaseActions = styled.a`
    font-size: 14px;
    
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;
    border-radius: 6px;
`

export const Location = styled(BaseActions)`
    background: ${({ theme }) => theme['purple-light']};
    color: ${({ theme }) => theme['purple-dark']};

    text-decoration: none;
`

export const Cart = styled(BaseActions)`
    background-color: ${({ theme }) => theme['yellow-light']};
`