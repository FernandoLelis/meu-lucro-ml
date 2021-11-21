import React, { useState } from "react";
import Categorias from './Categorias'
import BoxRes from "./BoxRes";
import './BoxForm.css';

export default function BoxForm(props) {

    const [nome, setNome] = useState('')
    const [custo, setCusto] = useState('')


    return(
        <div>
            <form>
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
            
                <Categorias />
                



            </div>
            </form>
            <BoxRes 
                nome={nome}
                custo={custo}
            />

        </div>
    );
}