import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { FormHeader, FormTitle, CheckoutContainer, FormsContainer, FormsContent, InputLine, InputsArea, OrderInfosContainer, MethodPaymentArea, MethodPaymentButton, ResumeOrderContainer, OrderCard, RemoveButton, OrderCardAmount, OrderProductInfo, OrderButtons, Separator, OrderDelivery, OrderDeliveryLine } from "./styles";
import { useTheme } from "styled-components";
import { Input } from "../../components/Input";
import ExpressoImg from '../../assets/expresso.png'
import { Count } from "../../components/Count";
import { Button } from "../../components/Button";

export function Checkout() {
    const theme = useTheme()

    return (
        <CheckoutContainer>
            <FormsContent>
                <OrderInfosContainer>
                    <h2>Complete seu pedido</h2>

                    <FormsContainer>
                        <FormHeader>
                            <MapPinLine size={22} color={theme["yellow-dark"]} />

                            <FormTitle>
                                <h4>Endereço de Entrega</h4>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </FormTitle>
                        </FormHeader>

                        <InputsArea>
                            <InputLine>
                                <Input
                                    size="12.5rem"
                                    placeholder="CEP"
                                />
                            </InputLine>
                            <InputLine>
                                <Input
                                    size="35rem"
                                    placeholder="Rua"
                                />
                            </InputLine>
                            <InputLine>
                                <Input
                                    size="12.5rem"
                                    placeholder="Número"
                                />
                                <Input
                                    size="21.75rem"
                                    placeholder="Complemento"
                                />
                            </InputLine>
                            <InputLine>
                                <Input
                                    size="12.5rem"
                                    placeholder="Bairro"
                                />
                                <Input
                                    size="17.25rem"
                                    placeholder="Cidade"
                                />
                                <Input
                                    size="3.75rem"
                                    placeholder="UF"
                                />
                            </InputLine>
                        </InputsArea>
                    </FormsContainer>

                    <FormsContainer>
                        <FormHeader>
                            <CurrencyDollar size={22} color={theme.purple} />

                            <FormTitle>
                                <h4>Pagamento</h4>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </FormTitle>
                        </FormHeader>

                        <MethodPaymentArea>
                            <MethodPaymentButton>
                                <CreditCard size={16} color={theme.purple}/>
                                Cartão de Crédito
                            </MethodPaymentButton>
                            <MethodPaymentButton>
                                <Bank size={16} color={theme.purple}/>
                                Cartão de Débito
                            </MethodPaymentButton>
                            <MethodPaymentButton>
                                <Money size={16} color={theme.purple}/>
                                Dinheiro
                            </MethodPaymentButton>
                        </MethodPaymentArea>
                    </FormsContainer>
                </OrderInfosContainer>

                <OrderInfosContainer>
                    <h2>Cafés Selecionados</h2>

                    <ResumeOrderContainer>
                        <OrderCard>
                            <OrderProductInfo>
                                <img src={ExpressoImg} alt="café expresso" />
                                <OrderCardAmount>
                                    <h4>Expresso Tradicional</h4>
                                    <OrderButtons>
                                        <Count />
                                        <RemoveButton>
                                            <Trash size={16} color={theme.purple} />
                                            Remover
                                        </RemoveButton>
                                    </OrderButtons>
                                </OrderCardAmount>
                            </OrderProductInfo>
                            <strong>R$ 9,90</strong>                          
                        </OrderCard>
                        <Separator />
                        <OrderCard>
                            <OrderProductInfo>
                                <img src={ExpressoImg} alt="café expresso" />
                                <OrderCardAmount>
                                    <h4>Expresso Tradicional</h4>
                                    <OrderButtons>
                                        <Count />
                                        <RemoveButton>
                                            <Trash size={16} color={theme.purple} />
                                            Remover
                                        </RemoveButton>
                                    </OrderButtons>
                                </OrderCardAmount>
                            </OrderProductInfo>
                            <strong>R$ 9,90</strong>                          
                        </OrderCard>
                        <Separator />

                        <OrderDelivery>
                            <OrderDeliveryLine>
                                <span>Total de itens</span>
                                <span>R$ 29,70</span>
                            </OrderDeliveryLine>
                            <OrderDeliveryLine>
                                <span>Entrega</span>
                                <span>R$ 3,50</span>
                            </OrderDeliveryLine>
                            <OrderDeliveryLine>
                                <strong>Total</strong>
                                <strong>R$ 33,20</strong>
                            </OrderDeliveryLine>
                        </OrderDelivery>

                        <Button 
                            title="Confirmar Pedido"
                        />
                    </ResumeOrderContainer>
                </OrderInfosContainer>
            </FormsContent>
        </CheckoutContainer>
    )
}