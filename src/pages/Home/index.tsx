import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { HomeContainer, Infos, Qualities, QualitiesContainer } from "./styles";
import mainCoffee from '../../assets/coffee.png'

export function Home() {
    return (
        <HomeContainer>
            <Infos>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com a Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                <QualitiesContainer>
                    <Qualities bgColor="darkYellow">
                        <span>
                            <ShoppingCart size={18} color='#FFF' weight='fill'/>
                        </span>
                        Compra simples e segura
                    </Qualities>
                    <Qualities bgColor="gray">
                        <span>
                            <Package size={18} color='#FFF' weight='fill'/>
                        </span>
                        Embalagem mantém o café intacto
                    </Qualities>
                    <Qualities bgColor="yellow">
                        <span>
                            <Timer size={18} color='#FFF' weight='fill'/>
                        </span>
                        Entrega rápida e rastreada
                    </Qualities>
                    <Qualities bgColor="purple">
                        <span>
                            <Coffee size={18} color='#FFF' weight='fill'/>
                        </span>
                        O café chega fresquinho até você
                    </Qualities>
                </QualitiesContainer>
            </Infos>

            <img src={mainCoffee} alt="Copo de café" />
        </HomeContainer>
    )
}