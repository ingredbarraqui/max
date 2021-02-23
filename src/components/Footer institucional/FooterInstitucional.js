import React from 'react'
import './FooterInstitucional.css';
import formasPagamento from "./formasPagamento.png"

const FooterInstitucional = () => {
    return (
        <section className="container">
            <div className="formasPagamento">
                <h4 class="cards-title">PRINCIPAIS CARTÕES ACEITOS</h4>
                <div><img src={formasPagamento} alt="" />
                    <p class="footer-cards-see-all"><a href="/formas-de-pagamento.php">VER TODOS</a></p>
                </div>
            </div>
            <div className="FooterInstitucional">
                <p>As ofertas dos produtos aqui divulgadas são exclusivamente para compras nas lojas físicas do Max Atacadista e estão sujeitas a alterações de estoque dentro do prazo de validade determinado de cada material</p>
                <p>Parcelamentos: PNEUS - parcelamento em até 10x sem juros no cartão Max Atacadista Cetelem e em até 6x sem juros em todos os cartões aceitos em lojas com parcela mínima de R$ 20,00. BAZAR - parcelamento em até 6x sem juros em todos os cartões aceitos em lojas com parcela mínima de R$ 20,00. No cheque em até 4x sem juros (sujeito a aprovação da promotora de vendas Losango nas lojas). Para todas as compras parceladas em cartões de crédito, a autorização da venda é mediante aprovação do banco do seu cartão de crédito. Os preços na modalidade atacado são válidos somente para produtos de mesma fragrâncias, sabores, etc. Consultar disponibilidade dos produtos nas lojas da rede. Reservamo-nos o direito de corrigir possíveis erros gráficos ou de digitação. Consulte demais condições nas lojas Max Atacadista. As imagens são meramente ilustrativas.</p>
            </div>
        </section >
    )
}

export default FooterInstitucional
