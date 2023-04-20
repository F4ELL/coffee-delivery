import { BannerIcon, BannerIntro, BannerIntroContent, BannerQualities, BannerQualitiesItem, BannerTextArea, HomeContainer } from "./styles";
import CoffeeImg from '../../assets/coffee.png'
import { ShoppingCart, Package, Coffee, Watch } from 'phosphor-react'

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
                                    <ShoppingCart size={16} weight="fill" color="white"/>
                                </BannerIcon>
                                <span>Compra simples e segura</span>
                            </BannerQualitiesItem>
                            <BannerQualitiesItem>
                                <BannerIcon
                                    variant="package"
                                >
                                    <Package size={16} weight="fill" color="white"/>
                                </BannerIcon>
                                <span>Embalagem mantém o café intacto</span>
                            </BannerQualitiesItem>
                            <BannerQualitiesItem>
                                <BannerIcon
                                    variant="watch"
                                >
                                    <Watch size={16} weight="fill" color="white"/>
                                </BannerIcon>
                                <span>Entrega rápida e rastreada</span>
                            </BannerQualitiesItem>
                            <BannerQualitiesItem>
                                <BannerIcon
                                    variant="coffee"
                                >
                                    <Coffee size={16} weight="fill" color="white"/>
                                </BannerIcon>
                                <span>O café chega fresquinho até você</span>
                            </BannerQualitiesItem>
                        </BannerQualities>
                    </BannerTextArea>
                    <img src={CoffeeImg} alt="" />
                </BannerIntroContent>
            </BannerIntro>
        </HomeContainer>
    )
}