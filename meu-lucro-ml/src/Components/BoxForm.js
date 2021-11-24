import React, { useState } from "react";
import Categorias from './Categorias'
import BoxRes from "./BoxRes";
import './BoxForm.css';
import ValorFrete from "./ValorFrete";

export default function BoxForm() {

    const [custo, setCusto] = useState('')


    return(
        <div>
            <form>
            <div className="boxForm">
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
                <ValorFrete />
                
                



            </div>
            </form>
            <BoxRes 
                custo={custo}
                
            />

        </div>
    );
}