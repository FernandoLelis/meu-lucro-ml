import React, { useState } from "react";

const initialValue = {
  nome: '',
  custo: null,
  categoria: '',
  tipo: '',
  valorAnu: null,
}

const Form = () => {
  const [values, setValues] = useState({})

  return (
    <form>
      <div className="boxForm">
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" id="name" placeholder="Ex: Fone de Ouvido" />
      
        <label htmlFor="custo">Custo:</label>
        <input type="number" name="custo" id="custo" placeholder="Ex: R$ 45,90" />

        <label htmlFor="categoria">Categoria:</label>
        <input name="categoria" id="categoria" />

        <label htmlFor="tipo">Tipo:</label>
        <input type="radio" name="tipo" id="tipo" />

        <label htmlFor="valorAnu">Valor do Anuncio:</label>
        <input type="number" name="valorAnu" id="valorAnu" placeholder="Ex: R$ 80,90" />
      
      </div>


      
      <div className="boxRes">
         <p>&copy; Fernando Lélis</p>
      </div>
    </form>
    );
}

export default Form;
