import React, { useState } from "react";
import '../App.css';

export default function Categorias() {

    const [categoria, setCategoria] = useState('')

    return(
        <div className="formcate">
        <form>
            <label htmlFor="categoria">Categoria:</label>
            <select name="categoria" id="categoria" value={categoria} onChange={(ev) => setCategoria(ev.target.value)}>
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
        </form>
        </div>
    )
}