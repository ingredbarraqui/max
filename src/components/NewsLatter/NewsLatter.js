import React from 'react'
import news from "./news.png"
import "./NewsLatter.css"

const NewsLatter = () => {
    return (
        <section className="newsLatter">
            <div className="container">
                <div className="grid_container__news">
                    <div className="item1_news">
                        <div className="New_conteudo__text" >
                            <h4>OFERTAS</h4>
                            <p>DO ENCARTE E DA TV</p>
                        </div>
                    </div>
                    <div className="item2_news">
                        <div className="New_conteudo__img">
                            <img src={news} alt="" />
                        </div>
                    </div>
                    <div className="item3_news">
                        <div className="New_conteudo__label">
                            <label htmlFor="text">
                                <p>Confira os endereços, horários e encartes de nossas lojas:</p>
                                <input type="text" />
                            </label>
                            <button>VER OFERTAS</button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default NewsLatter
