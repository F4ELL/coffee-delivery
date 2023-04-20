import styled from 'styled-components'

export const CountContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    background-color: ${({ theme }) => theme['base-button']};
    border-radius: 6px;

    padding: 0.5rem;

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: transparent;
        border: 0;
    }
`