import { ButtonContainer } from "./styles";

type Props = {
    title: string
}

export function Button({title}: Props) {
    return (
        <ButtonContainer>
            {title}
        </ButtonContainer>
    )
}