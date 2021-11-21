import React, { useState } from "react";

const initialValue = {
  nome: '',
  custo: null,
  categoria: '',
  tipo: '',
  valorAnu: null,
}

const Form = () => {

   const [values, setValues] = useState({initialValue})

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value })
    
  }

  function onSubmit(ev) {
    ev.preventDefault();
    
  }

  return (
    <div>
    <form onSubmit={onSubmit}>
      <div className="boxForm">
        <label htmlFor="name">Nome:</label>
        <input type="text" name="nome" id="nome" placeholder="Ex: Fone de Ouvido" onChange={onChange} />
      
        <label htmlFor="custo">Custo:</label>
        <input type="number" name="custo" id="custo" placeholder="Ex: R$ 45,90" onChange={onChange} />

        <label htmlFor="categoria">Categoria:</label>
        <select name="categoria" id="categoria" onChange={onChange}>
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
          <input type="radio" name="tipo" id="tipo" value="classico" onChange={onChange} /> Clássico
          <input type="radio" name="tipo" id="tipo" value="Premium" onChange={onChange} /> Premium
        </label>

        <label htmlFor="valorAnu">Valor do Anuncio:</label>
        <input type="number" name="valorAnu" id="valorAnu" placeholder="Ex: R$ 80,90" onChange={onChange} />
              
        <label htmlFor="freteGratis">
          <input type="checkbox" name="freteGratis" id="freteGratis" onChange={onChange} /> Frete Grátis
        </label>
      
        </div>
      </form>


      

    
    </div>
  );
}

export default Form;
