import React from "react";
import './BoxRes.css'

export default function BoxRes(props) {
    return (
        <div className="boxRes">
            <div className="card">
                <div className="cardRes">
                    <div>
                        Valor do Anuncio:
                    </div>                    
                    <div className="CardCal">
                        R$ {props.valorAnuncio()}   
                    </div>                           
                </div>
                
                <div className="cardRes">
                    <div>Lucro Bruto: </div>
                    <div className="CardCal">R$ {props.lucroBruto}</div>
                </div>
                <div className="cardRes">
                    <div>Lucro Liquido:</div>
                    <div className="CardCal">R$ {props.lucroLiquido}</div>
                    
                </div>
            </div>
            
            
        </div> 
    );
}