import React, { useState } from "react";
import FormCate from './FormCate'

import App from "../App";

export default function BoxForm() {

    const [nome, setNome] = useState('')
    const [custo, setCusto] = useState('')


    return(
        <div>
            <div className="boxForm">
                <label htmlFor="nome">Nome:</label>
                <input 
                    type="text" 
                    name="nome" 
                    id="nome" 
                    value={nome}
                    placeholder="Ex: Fone de Ouvido"
                    onChange={(ev) => setNome(ev.target.value)} 
                />

                <label htmlFor="custo">Custo R$:</label>
                <input 
                    type="number" 
                    name="custo" 
                    id="custo" 
                    value={custo}
                    placeholder="Ex: 45.90" 
                    onChange={(ev) => setCusto(ev.target.value)} 
                />

                
                <FormCate />



            </div>

            <div className="boxRes">
                Nome: {nome} <br />
                Custo: {custo}  
            </div>

        </div>
    );
}