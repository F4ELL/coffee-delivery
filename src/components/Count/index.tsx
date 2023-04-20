import { useTheme } from "styled-components";
import { CountContainer } from "./styles";
import { Minus, Plus } from "phosphor-react";

export function Count() {
    const theme = useTheme()

    return (
        <CountContainer>
            <button>
                <Minus size={14} color={theme.purple} weight="bold" />
            </button>

            <span>1</span>

            <button>
                <Plus size={14} color={theme.purple} weight="bold" />
            </button>
        </CountContainer>
    )
}