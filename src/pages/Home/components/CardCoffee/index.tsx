import { AddCardButton, Badge, CardCoffeeContainer, Price, PriceAmountActions, PriceAmountArea } from "./styles";
import { Count } from "../../../../components/Count";
import { ShoppingCart } from "phosphor-react";

import ExpressoImg from '../../../../assets/expresso.png'

export function CardCoffee() {
    return (
        <CardCoffeeContainer>
            <img src={ExpressoImg} alt="Café expresso" />

            <Badge>Tradicional</Badge>

            <h4>Expresso Tradicional</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <PriceAmountArea>
                <Price>
                    R$ <strong>9,90</strong>
                </Price>
                <PriceAmountActions>
                    <Count />

                    <AddCardButton>
                        <ShoppingCart size={22} weight="fill" color="white" />
                    </AddCardButton>
                </PriceAmountActions>
            </PriceAmountArea>
        </CardCoffeeContainer>
    )
}