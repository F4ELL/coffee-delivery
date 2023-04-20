import { Badge, BannerIcon, BannerIntro, BannerIntroContent, BannerQualities, BannerQualitiesItem, BannerTextArea, CoffeeCard, HomeContainer, ListCards, ListCardsContent, Price, PriceAmountArea, PriceAmountActions, AddCardButton } from "./styles";
import CoffeeImg from '../../assets/coffee.png'
import { ShoppingCart, Package, Coffee, Watch } from 'phosphor-react'
import ExpressoImg from '../../assets/expresso.png'
import { Count } from "../../components/Count";

export function Home() {
    return (
        <HomeContainer>
            <BannerIntro>
                <BannerIntroContent>
                    <BannerTextArea>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                        <BannerQualities>
                            <BannerQualitiesItem>
                                <BannerIcon
                                    variant="shop"
                                >
                                    <ShoppingCart size={16} weight="fill" color="white" />
                                </BannerIcon>
                                <span>Compra simples e segura</span>
                            </BannerQualitiesItem>
                            <BannerQualitiesItem>
                                <BannerIcon
                                    variant="package"
                                >
                                    <Package size={16} weight="fill" color="white" />
                                </BannerIcon>
                                <span>Embalagem mantém o café intacto</span>
                            </BannerQualitiesItem>
                            <BannerQualitiesItem>
                                <BannerIcon
                                    variant="watch"
                                >
                                    <Watch size={16} weight="fill" color="white" />
                                </BannerIcon>
                                <span>Entrega rápida e rastreada</span>
                            </BannerQualitiesItem>
                            <BannerQualitiesItem>
                                <BannerIcon
                                    variant="coffee"
                                >
                                    <Coffee size={16} weight="fill" color="white" />
                                </BannerIcon>
                                <span>O café chega fresquinho até você</span>
                            </BannerQualitiesItem>
                        </BannerQualities>
                    </BannerTextArea>
                    <img src={CoffeeImg} alt="" />
                </BannerIntroContent>
            </BannerIntro>

            <ListCards>
                <h2>Nossos cafés</h2>
                <ListCardsContent>
                    <CoffeeCard>
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
                    </CoffeeCard>
                    
                </ListCardsContent>
            </ListCards>
        </HomeContainer>
    )
}