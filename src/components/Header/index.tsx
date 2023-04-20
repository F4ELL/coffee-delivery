import { CardAmountItems, HeaderButtonsArea, HeaderContainer, HeaderContent, LocationButton, ShopButton } from "./styles";

import LogoImg from '../../assets/logo-coffee.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { useState } from "react";

export function Header() {
    const theme = useTheme()
    const [amountCartItens, setAmountCartItens] = useState(2)

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={LogoImg} alt="" />

                <HeaderButtonsArea>
                    <LocationButton>
                        <MapPin size={22} color={theme.purple} weight="fill" />
                        <span>Porto Alegre, RS</span>
                    </LocationButton>
                    <ShopButton>
                        <ShoppingCart size={22} color={theme["yellow-dark"]} weight="fill" />

                        {amountCartItens > 0 &&
                            <CardAmountItems>
                                <span>{amountCartItens}</span>
                            </CardAmountItems>
                        }
                    </ShopButton>
                </HeaderButtonsArea>
            </HeaderContent>
        </HeaderContainer>
    )
}