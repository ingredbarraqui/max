import React from 'react'
import "./FooterContato.css"

const FooterContato = () => {
    return (
        <section >
            <div className="footerContato__bg">
                <div className="container">
                    <div className="item__footerContato_titulo">
                        <h2> TELEVENDAS</h2>
                    </div>
                    <div className="grid-container__contato">
                        <div>
                            <div className="footerContato__contato">
                                <div className="footerContato__contato_info">
                                    <p>Segunda a Sexta: 8h00 às 12h00 / 14h00 às 18h00</p>
                                    <p>Sábado: 8h00 às 12h00, exceto feriados.</p>
                                </div>
                                <h3>0800 727 9767</h3>
                                <h3>Chat Online</h3>
                            </div>
                        </div>
                        <div>
                            <p className="footerContato__contato_info">Cadastre-se, e nós entraremos em contato</p>
                            <div className="footerContato__contato_input">
                                <input type="text" placeholder="Nome*" />
                                <input type="email" placeholder="Email*" />

                            </div>
                            <div className="footerContato__contato_input">
                                <input type="phone" placeholder="Telefone*" />
                                <select name="city" id="city">
                                    <option value="regiao">Selecione sua regiâo</option>
                                </select>
                            </div>
                            <button className="footerContato_conteudo__button">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterContato
