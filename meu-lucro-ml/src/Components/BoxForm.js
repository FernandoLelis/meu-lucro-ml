import React, { useState } from "react";
import BoxRes from "./BoxRes";
import './BoxForm.css';



function BoxForm ({ categorias }) {

    const [custo, setCusto] = useState('')
    const [porcentagemLucro, setPorcentagemLucro] = useState('')
    const [selectCat, setSelectCat] = useState(-1);
    const [selectTipo, setSelectTipo] = useState(-1)
    const [freteGratis, setFreteGratis] = useState(false)
    const [custoFrete, setPriceFrete] = useState(0)
    

    function toggle() {
        setFreteGratis(!freteGratis)
    } 
    
    const valorTipo = (
            selectCat > -1 
            ? (categorias[selectCat][selectTipo])
            : ''
        )
    
    const lucroBruto = (
            porcentagemLucro !== ''
            ? (custo * (porcentagemLucro / 100)) + custo
            : 0
        );

    const lucroLiquido = (
            porcentagemLucro !== '' 
            ? custo * (porcentagemLucro / 100) 
            : 0
        );
    
    const valorAnuncio = () => {
            const calculoFreteGratis = (freteGratis ? custoFrete : 0) + lucroBruto 
            
            
            
            
             return(

                selectTipo !== -1 ? (
                    (calculoFreteGratis + 5) / (1 - valorTipo) < 79
                    && (calculoFreteGratis + 5) / (1 - valorTipo) !== 0 
                    ? (calculoFreteGratis + 5) / (1 - valorTipo)
                    : calculoFreteGratis / (1 - valorTipo)
                    ) : 0                
            ).toFixed(2)
           
        };
        
        

    return(
        <>
            <div className="boxForm">
                <label htmlFor="custo">
                    Custo:
                </label>
                <input 
                    type="number" 
                    name="custo" 
                    id="custo" 
                    value={custo}
                    placeholder="R$" 
                    onChange={(ev) => setCusto(parseFloat(ev.target.value))} 
                />
                <label htmlFor="price">
                    Porcentagem de lucro:
                </label>
                <input 
                    type="number" 
                    name="porcentagemLucro"
                    value={porcentagemLucro}
                    placeholder="%"   
                    onChange={(ev) => setPorcentagemLucro(parseFloat(ev.target.value))}
                />
                    <label htmlFor="selectCat">
                        Categoria:
                    </label>
                    <select name="selectCat" id="selectCat" onClick={(ev) => setSelectCat(ev.target.value)}>
                        <option value={-1}>Selecione</option>
                        {
                            categorias.map((item, i) => (
                                <option key={"categoria" + i} value={i}>{item.nome}</option>
                            ) )
                        }   
                    </select>
                    <div>
                    <label htmlFor="selectTipo"> Tipo de anúncio:</label>  
                        <input type="radio" name="selectTipo" value="Clássico" onChange={(ev) => setSelectTipo((ev.target.value))}/> Clássico
                        <input type="radio" name="selectTipo" value="Premium" onChange={(ev) => setSelectTipo(ev.target.value)} /> Premium              
                    </div>
                
                
                <label htmlFor="freteGratis">
                    <input type="checkbox" name="freteGratis" onClick={toggle} /> Frete grátis
                </label> 
                    
                {
                    freteGratis && (                        
                        <>
                            <label htmlFor="priceFrete">Quanto paga no frete gratis R$:</label>
                            <input type="number" 
                                name="custoFrete" 
                                value={custoFrete} 
                                placeholder="R$" 
                                onChange={(ev) => 
                                setPriceFrete(parseFloat(ev.target.value))} 
                            />
                        </>
                       
                    )
                }
                

            </div>
            <BoxRes
                valorAnuncio={valorAnuncio} 
                lucroBruto={lucroBruto.toFixed(2)}
                lucroLiquido={lucroLiquido.toFixed(2)}                
            />
        </>
    );
}

export default BoxForm;
