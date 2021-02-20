import React from 'react'
import './Institucional.css';
import max_supermecados from './max_supermecados.jpg'
import max_banner_home_institucional_cartoes from './max_banner_home_institucional_cartoes.jpg'
import mais_por_menos from './mais_por_menos.jpg'

const Institucional = () => {
    return (
        <section className="container">
            <h2 className="item__institucional_titulo">Institucional</h2>
            <div className="grid-container__institucional" >
                <div className="item__institucional" >
                    <a href="">
                        <img src={max_supermecados} alt="" />
                        <div className="item__institucional_conteudo">
                            <h4>Conheça o Max Atacadista</h4>
                            <p>Atendemos no atacado e no varejo</p>
                        </div>
                    </a>
                </div>
                <div className="item__institucional">
                    <a href="">
                        <img src={max_banner_home_institucional_cartoes} alt="" />
                        <div className="item__institucional_conteudo">
                            <h4>Formas de pagamento:</h4>
                            <p>Confira as opções de pagamento</p>
                        </div>
                    </a>
                </div>
                <div className="item__institucional">
                    <a href=""><img src={mais_por_menos} alt="" />
                        <div className="item__institucional_conteudo">
                            <h4>Saiba como funciona</h4>
                            <p>Conheça as vantagens de comprar no Max Atacadista</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Institucional
