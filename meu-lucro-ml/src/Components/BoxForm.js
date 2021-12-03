import React, { useState } from "react";
import BoxRes from "./BoxRes";
import './BoxForm.css';
import ValorFrete from "./ValorFrete";
import Categorias from "./Categorias";

const categorias = [
    {
        nome : "Celulares e SmartFones",
        tipo : ["Clássico", "Premium"]
    },
    {
        nome : "Suplementos",
        tipo : ["Clássico", "Premium"],
    }
]


export default function BoxForm() {

    const [custo, setCusto] = useState('')

    const [selectCat, setSelectCat] = useState(-1);

    const handlerCarregarTipo = function (e) {
        const opcao = e.target.value;

        setSelectCat(opcao);
    }

    const [tipo, setTipo] = useState("")

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
                <div className="cat">
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
                {
                    
                    selectCat == -1 && 
                    (
                            <label>
                            <input type="radio" name="tipo" value=""/> Clássico
                            <input type="radio" name="tipo" value="" /> Premium
                            </label>
                    ) 
                }
                {
                    
                    selectCat > -1 && 
                    (
                        categorias[selectCat].tipo.map((item, i) => (
                            <label>
                            <input type="radio" key={"tipo" + i} name="tipo" value={item} onChange={(ev) => setTipo(ev.target.value)} /> {item}
                            </label>
                        )

                    ))
                }
                </div>
                <ValorFrete />
                
                {console.log(tipo)}



            </div>
            </form>
            <BoxRes 
                custo={custo}
                idTipo={selectCat}
                idTipo={tipo}
                
            />

        </div>
    );
}