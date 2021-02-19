import React from 'react'
import bg_home_topo3 from './bg_home_topo3.jpg';
import bannerMax from './bannerMax.jpg';
import './Home.css';
import max_home_banner_whatsapp from './max_home_banner_whatsapp.jpg';
import max_21_01_home_crediffato_ from './max_21_01_home_crediffato_.jpg';
import max_21_01_home_app from './max_21_01_home_app.jpg';

const Home = () => {
    return (
        <>
            <div>
                <div>
                    <img src={bg_home_topo3} alt="" />
                </div>
            </div>
            <section className="container ">
                <div className="grid-container__home">
                    <div className=".item1__home">
                        <div>
                            <a href=""><img src={bannerMax} alt="" /></a>
                        </div>
                    </div>
                    <div>
                        <div className="conteudo">
                            <div className="item2__home">
                                <a href=""><img src={max_home_banner_whatsapp} alt="" /></a>
                                <h3>Receba novidades do Max Atacadista direto em seu WhatsApp!</h3>
                                <p>Adicione aos seus contatos, envie um whats dizendo “quero preço baixo” e pronto!</p>
                            </div>
                        </div>
                        <div className="item2__home">
                            <div className="grid-container__home2">
                                <div className="item1__home">
                                    <a href=""><img src={max_21_01_home_crediffato_} alt="" /></a>
                                    <h3>Receba novidades do Max Atacadista direto em seu WhatsApp!</h3>
                                    <p>Adicione aos seus contatos, envie um whats dizendo “quero preço baixo” e pronto!</p>
                                </div>
                                <div className="item2__home">
                                    <a href=""><img src={max_21_01_home_app} alt="" /></a>
                                    <h3>Receba novidades do Max Atacadista direto em seu WhatsApp!</h3>
                                    <p>Adicione aos seus contatos, envie um whats dizendo “quero preço baixo” e pronto!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
