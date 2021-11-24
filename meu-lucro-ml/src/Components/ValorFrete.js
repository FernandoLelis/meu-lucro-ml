import React, { useState } from "react";
import './ValorFrete.css'

export default function ValorFrete() {

    const [price, setPrice] = useState('')
    const [priceFrete, setPriceFrete] = useState('')

    return(
            <div className="valorFrete">
                <label htmlFor="price">Valor do Anuncio R$:</label>
                <input 
                    type="number" 
                    name="price"
                    value={price}
                    placeholder="Ex: 80.90"   
                    onChange={(ev) => setPrice(ev.target.value)}
                />
                {price < 79 ?
                <span>
                    <label htmlFor="freteGratis">
                    <input 
                        type="checkbox" 
                        name="freteGratis"
                    /> 
                        Frete Grátis
                    </label>
                </span> : <span><label htmlFor="priceFrete">Valor do Frete R$:</label>
                <input 
                    type="number" 
                    name="priceFrete"
                    value={priceFrete}
                    placeholder="Ex: 19.45"   
                    onChange={(ev) => setPriceFrete(ev.target.value)}
                /></span>}
                
            </div>
    )
}