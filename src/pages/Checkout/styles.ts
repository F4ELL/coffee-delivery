import styled from 'styled-components'

export const CheckoutContainer = styled.main`
    width: 100%;
`

export const FormsContent = styled.section`
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;

    padding: 2.5rem 0;

    display: grid;
    grid-template-columns: 40rem 28rem;
    gap: 2rem;
`

export const OrderInfosContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        font-family: 'Baloo 2', cursive;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 23.4px;
        color: ${({ theme }) => theme['base-subtitle']};
    }
`

export const FormsContainer = styled.div`
    padding: 2.25rem;

    background-color: ${({ theme }) => theme['base-card']};
    border-radius: 6px;
`

export const FormHeader = styled.header`
    display: flex;
    gap: 0.5rem;
    
    margin-bottom: 2rem;
`

export const FormTitle = styled.div`
    h4 {
        font-weight: 400;
        line-height: 20.8px;
        color: ${({ theme }) => theme['base-subtitle']};

        margin-bottom: 0.125rem;
    }

    p {
        font-size: 0.875rem;
        line-height: 18.2px;
    }
`

export const InputsArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const InputLine = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export const MethodPaymentArea = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
`

export const MethodPaymentButton = styled.button`
    padding: 1rem;

    background-color: ${({ theme }) => theme['base-button']};
    border: 0;
    border-radius: 6px;

    font-size: 0.75rem;
    line-height: 19.2px;
    text-transform: uppercase;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme['base-hover']};
        transition: all ease 0.2s;
    }
`

export const ResumeOrderContainer = styled.div`
    padding: 2.5rem;

    background-color: ${({ theme }) => theme['base-card']};
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 6px;
`

export const OrderCard = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 0.5rem 0.25rem;

    img {
        width: 4rem;
        height: 4rem;
    }

    strong {
        line-height: 20.8px;
    }
`

export const OrderProductInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
`

export const OrderCardAmount = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h4 {
        font-size: 1rem;
        font-weight: 400;
        line-height: 20.8px;
        color: ${({ theme }) => theme['base-subtitle']};
    }
`

export const OrderButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const RemoveButton = styled.button`
    padding: 0.5rem 0.5rem;
    
    background-color: ${({ theme }) => theme['base-button']};
    border: 0;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    font-size: 0.75rem;
    line-height: 19.2px;
    text-transform: uppercase;

    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme['base-hover']};
        transition: all ease 0.2s;
    }
`

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme['base-button']};

    margin: 1.5rem 0;
`

export const OrderDelivery = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    margin-bottom: 1.5rem;
`

export const OrderDeliveryLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: 0.875rem;
        line-height: 18.2px;
    }

    strong {
        font-size: 1.25rem;
        line-height: 26px;
        color: ${({ theme }) => theme['base-subtitle']};
    }    
`