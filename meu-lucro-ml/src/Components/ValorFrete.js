import React, { useState } from "react";
import './ValorFrete.css'

export default function ValorFrete() {

    const [price, setPrice] = useState('')

    return(
        <form>
            <div className="valorFrete">
                <label htmlFor="price">Valor do Anuncio R$:</label>
                <input 
                    type="number" 
                    name="price"
                    value={price}
                    placeholder="Ex: 80.90"   
                    onChange={(ev) => setPrice(ev.target.value)}
                />
                    
                <div>
                <label htmlFor="freteGratis">
                    <input 
                        type="checkbox" 
                        name="freteGratis"
                    /> 
                    Frete Grátis
                </label>
                </div>
            </div>
        </form>
    )
}