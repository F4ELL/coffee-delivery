import styled from 'styled-components'

export const ButtonContainer = styled.button`
    width: 100%;

    background-color: ${({ theme }) => theme.yellow};
    border: 0;
    border-radius: 6px;

    font-size: 0.875rem;
    font-weight: 700;
    line-height: 22.4px;
    color: ${({ theme }) => theme.white};
    text-transform: uppercase;

    padding: 0.75rem 0.5rem;

    cursor: pointer;
`