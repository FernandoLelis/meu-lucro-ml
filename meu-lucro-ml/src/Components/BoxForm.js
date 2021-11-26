import React, { useState } from "react";
import BoxRes from "./BoxRes";
import './BoxForm.css';
import ValorFrete from "./ValorFrete";

const categorias = [
    {
        nome : "Celulares e SmartFones",
        tipo : ["classico", "premium"]
    },
    {
        nome : "Suplementos",
        tipo : ["classico", "premium"]
    }
]


export default function BoxForm() {

    const [custo, setCusto] = useState('')

    const [idTipo, setIdTipo] = useState(-1);

    const handlerCarregarTipo = function (e) {
        const opcao = e.target.value;

        setIdTipo(opcao);
    }

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
                <label htmlFor="categorias">Categoria:</label>
                <select name="categorias" id="selCategorias" onClick={handlerCarregarTipo}>
                    <option value={-1}>Selecione</option>
                    {
                        categorias.map((item, i) => (
                            <option key={"categoria" + i} value={i}>{item.nome}</option>
                        ) )
                    }
                </select>
                <label htmlFor="tipo">Tipo: </label>
                <select name="tipo" id="selTipo">
                    {
                        idTipo > -1 && 
                        (
                            categorias[idTipo].tipo.map((item, i) => (
                                <option key ={"tipo" + i} value={i}>{item}</option>
                            ))
                        )
                    }
                </select>
                <ValorFrete />
                
                {console.log(idTipo)}



            </div>
            </form>
            <BoxRes 
                custo={custo}
                idTipo={idTipo}
                
            />

        </div>
    );
}