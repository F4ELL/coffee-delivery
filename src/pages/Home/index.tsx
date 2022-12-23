import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { CardCoffee, CoffeeList, HomeContainer, Infos, Qualities, QualitiesContainer } from "./styles";
import mainCoffee from '../../assets/coffee.png'
import capuccino from '../../assets/capuccino.png'

export function Home() {
    return (
        <>
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
            <CoffeeList>
                <h3>Nossos cafés</h3>

                <CardCoffee>
                    <img src={capuccino} alt="Capuccino" />
                    <span>Tradicional</span>

                    <h4>Capuccino</h4>
                    <p>Bebida com canela feita de doses iguais de café, leite e espuma</p>

                    <p>R$<span>9,90</span></p>

                    <div>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>

                    <button>
                        <ShoppingCart />
                    </button>
                </CardCoffee>
            </CoffeeList>
        </>
    )
}