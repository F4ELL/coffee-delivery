import { Cart, HeaderContainer, Location } from "./styles";
import { ShoppingCart, MapPin } from 'phosphor-react'

import logoCoffee from '../../assets/logo-coffee.svg'
import { useTheme } from "styled-components";

export function Header() {
    const theme = useTheme()

    return (
        <HeaderContainer>
            <img src={logoCoffee} alt="" />

            <nav>
                <Location href="">
                    <MapPin size={22} weight='fill' color={theme.purple} />
                    Porto Alegre, RS
                </Location>
                <Cart href="">
                    <ShoppingCart size={22} weight='fill' color={theme["yellow-dark"]} />
                </Cart>
            </nav>
        </HeaderContainer>
    )
}