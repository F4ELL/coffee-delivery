import { ConfirmationOrderArea, ConfirmationOrderContent, InfoCardIcon, InfoCardText, InfoOrderCard, ListInfosOrder, SuccessContainer } from "./styles";
import DeliveryImg from '../../assets/success.png'
import { CurrencyDollar, MapPin, Watch } from "phosphor-react";

export function Success() {
    return (
        <SuccessContainer>
            <ConfirmationOrderArea>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>

                <ConfirmationOrderContent>
                    <ListInfosOrder>
                        <InfoOrderCard>
                            <InfoCardIcon
                                variant="location"
                            >
                                <MapPin size={16} weight="fill" color="white" />
                            </InfoCardIcon>
                            <InfoCardText>
                                <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
                                <span>Farrapos - Porto Alegre, RS</span>
                            </InfoCardText>
                        </InfoOrderCard>
                        <InfoOrderCard>
                            <InfoCardIcon
                                variant="time"
                            >
                                <Watch size={16} weight="fill" color="white" />
                            </InfoCardIcon>
                            <InfoCardText>
                                <span>Previsão de entrega</span>
                                <span><strong>20 min - 30 min</strong></span>
                            </InfoCardText>
                        </InfoOrderCard>
                        <InfoOrderCard>
                            <InfoCardIcon
                                variant="payment"
                            >
                                <CurrencyDollar size={16} weight="fill" color="white" />
                            </InfoCardIcon>
                            <InfoCardText>
                                <span>Pagamento na entrega</span>
                                <span><strong>Cartão de Crédito</strong></span>
                            </InfoCardText>
                        </InfoOrderCard>
                    </ListInfosOrder>

                    <img src={DeliveryImg} alt="" />
                </ConfirmationOrderContent>
            </ConfirmationOrderArea>
        </SuccessContainer>
    )
}