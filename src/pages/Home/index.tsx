import { BannerIntro, BannerIntroContent, BannerHighlights, BannerTextArea, HomeContainer, ListCards, ListCardsContent } from "./styles";
import CoffeeImg from '../../assets/coffee.png'
import { CardCoffee } from "./components/CardCoffee";
import { HighlightItem } from "./components/HighlightItem";

export function Home() {
    return (
        <HomeContainer>
            <BannerIntro>
                <BannerIntroContent>
                    <BannerTextArea>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                        <BannerHighlights>
                            <HighlightItem variant="shop" title="Compra simples e segura" />
                            <HighlightItem variant="package" title="Embalagem mantém o café intacto" />
                            <HighlightItem variant="watch" title="Entrega rápida e rastreada" />
                            <HighlightItem variant="coffee" title="o café chega fresquinho até você" />
                        </BannerHighlights>
                    </BannerTextArea>
                    <img src={CoffeeImg} alt="" />
                </BannerIntroContent>
            </BannerIntro>

            <ListCards>
                <h2>Nossos cafés</h2>
                <ListCardsContent>
                    <CardCoffee />                    
                    <CardCoffee />                    
                    <CardCoffee />                    
                    <CardCoffee />                    
                    <CardCoffee />                    
                </ListCardsContent>
            </ListCards>
        </HomeContainer>
    )
}