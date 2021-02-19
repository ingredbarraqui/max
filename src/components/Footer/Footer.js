import React from 'react'
import './Footer.css';
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <nav className="grid-container__footer ">
                        <div className="item1__footer">
                            <h3 className="Titulo__footer">INSTITUCIONAL</h3>
                            <li><a href="https://www.supermuffato.com.br/crediffato" target="blank" class="list-group-item">Crediffato</a></li>
                            <li><a href="/fale-das-lojas.php" class="list-group-item">Fale das Lojas</a></li>
                            <li><a href="/galerias-comerciais.php" class="list-group-item">Galerias Comerciais</a></li>
                            <li><a href="/marcas.php" class="list-group-item">Marcas e importações</a></li>
                            <li><a href="/lojas" class="list-group-item">Nossas Lojas</a></li>
                            <li><a href="/politica-de-privacidade" class="list-group-item">Política de Privacidade</a></li>
                            <li><a href="/quem-somos.php" class="list-group-item">Quem Somos</a></li>
                            <li><a href="/trabalhe-conosco.php" class="list-group-item">Trabalhe Conosco</a></li>
                        </div>
                        <div className="item2__footer">
                            <h3 className="Titulo__footer">INSTITUCIONAL</h3>
                            <li><a href="/como-funciona.php" class="list-group-item">Como Funciona</a></li>
                            <li><a href="/fale-conosco.php" class="list-group-item">Fale Conosco</a></li>
                            <li> <a href="/formas-de-pagamento.php" class="list-group-item">Formas de Pagamento</a></li>
                            <li><a href="/lgpd-lei-geral-de-protecao-de-dados" class="list-group-item">Lei Geral de Proteção de Dados</a></li>
                        </div>
                        <div className="item3__footer">
                            <h3 className="Titulo__footer">INSTITUCIONAL</h3>
                            <li><a href="/correntedobem" class="list-group-item">Corrente do Bem</a></li>
                            <li><a href="/promocoes.php" class="list-group-item">Promoções</a></li>
                        </div>
                        <div className="item4__footer">
                            <h3 className="Titulo__footer">INSTITUCIONAL</h3>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Mupay</a></li>
                        </div>
                    </nav>
                </div>
            </footer>
        </>
    )
}

export default Footer
