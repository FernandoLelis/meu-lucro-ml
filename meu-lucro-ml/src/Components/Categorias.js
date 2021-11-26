import React, { useState } from "react";
import './Categorias.css';


const categorias = {
    celularesSmartphones:{
        classico: 0.11,
        premium: 0.16 
    },
    suplementos:{
        classico: 0.13,
        premium: 0.16 
    }
};

console.log(categorias)

export default function Categorias(props) {

 
    const [selectCat, setSelectCat] = useState('');

    const [tipo, setTipo] = useState('');

 

    return(
        <div className="cat">
            <label htmlFor="selectCat">Categoria:</label> <br />
            <select name="selectCat" id="selectCat" value={selectCat} onChange={(ev) => setSelectCat(ev.target.value)} >
                <option value="">Selecione</option>
                <option value="celularesSmartphones">Celulares e Smartphones</option>
                <option value="suplementos">Suplementos</option>
                <option value="tenis">Tênis</option>
                <option value="lumináriasTetoSolaresArandelas">Luminárias de Teto, Solares e Arandelas</option>
                <option value="notebooks">Notebooks</option>
                <option value="tratamentosCabelo">Tratamentos para o Cabelo</option>
                <option value="calcas">Calças</option>
                <option value="fonesHeadsets">Fones e Headsets</option>
                <option value="camisolasMoletons">Camisolas e moletons</option>
                <option value="botas">Botas</option>
                <option value="bicicletas">Bicicletas</option>
                <option value="hdsSdds">HDs e SSDs</option>
                <option value="roteadores">Roteadores</option>
                <option value="relogiosPulso">Relógios de Pulso</option>
                <option value="smartwatches">Smartwatches</option>
                <option value="computadores">Computadores</option>
                <option value="impressoras">Impressoras</option>
                <option value="televisores">Televisores</option>
                <option value="caixasSomAutofalantes">Caixas de Som e Autofalantes</option>
                 <option value="mediaStreaming">Media Streaming</option>
            </select>

            <label htmlFor="tipo">Tipo:<br />
            <input type="radio" name="tipo" id="tipo" value="classico" onChange={(ev) => setTipo(ev.target.value)} /> Clássico
            <input type="radio" name="tipo" id="tipo" value="Premium" onChange={(ev) => setTipo(ev.target.value)} /> Premium
        </label>
        
        <div>{selectCat}</div>
        <div>{tipo}</div>
        <div>{}</div>
        </div>
    )
}