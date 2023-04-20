import { InputContainer } from "./styles";

type Props = {
    size: string
    placeholder: string
}

export function Input({ size, placeholder }: Props) {
    return (
        <InputContainer 
            sizeInput={size}
            placeholder={placeholder}
        >

        </InputContainer>
    )
}