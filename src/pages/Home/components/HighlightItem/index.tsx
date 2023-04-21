import { HighlightIcon, HighlightItemContainer } from "./styles";

import { ShoppingCart } from "phosphor-react";

export interface PropsHighlight {
    variant: "shop" | "package" | "watch" | "coffee" 
    title: string
} 

export function HighlightItem({ variant, title }: PropsHighlight) {
    return (
        <HighlightItemContainer>
            <HighlightIcon
                colorBg={variant}
            >
                <ShoppingCart size={16} weight="fill" color="white" />
            </HighlightIcon>
            <span>{title}</span>
        </HighlightItemContainer>
    )
}