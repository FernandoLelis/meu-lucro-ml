import React from "react";
import './BoxRes.css'

export default function BoxRes(props) {

    return (
        <div className="boxRes">
            <div className="card">
                <div className="price">
                    <div>Valor do Anuncio:</div>
                    <div className="resCal">R$ {props.idTipo}-</div>
                </div>
                <div className="bruto">
                    <div>Lucro Bruto: </div>
                    <div className="resCal">R$ {props.custo}</div>
                </div>
                <div className="liquido">
                    <div>Lucro Liquido:</div>
                    <div className="resCal">R$ --,--</div>
                    
                </div>
            </div>
            
            
        </div> 
    );
}