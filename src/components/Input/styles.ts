import styled from 'styled-components'

type Props = {
    sizeInput: string
}

export const InputContainer = styled.input<Props>`
    padding: 0.75rem;
    width: ${({ sizeInput }) => sizeInput};

    font-size: 0.875rem;
    line-height: 18.2px;

    background-color: ${({ theme }) => theme['base-input']};
    border: 0;
    border-radius: 4px;

    &::placeholder {
        color: ${({ theme }) => theme['base-label']};
    }
`