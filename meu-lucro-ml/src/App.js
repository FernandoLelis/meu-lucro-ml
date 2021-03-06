import React from 'react';
import './App.css';
import Header from './Components/Header';
import BoxForm from './Components/BoxForm';

function App() {

  const categorias = [
    {
      "nome": "Celulares e SmartFones",
      "Clássico" : 0.11,
      "Premium" : 0.16    
    },
    {
      "nome" : "Suplementos",
      "Clássico" : 0.12,
      "Premium" : 0.17
    },
    {
      "nome" : "Tênis",
      "Clássico" : 0.14,
      "Premium" : 0.19
    },
    {
      "nome" : "Luminárias de Teto, Solares e Arandelas",
      "Clássico" : 0.115,
      "Premium" : 0.165
    },
    {
      "nome" : "Notebooks",
      "Clássico" : 0.11,
      "Premium" : 0.16
    },
    {
      "nome" : "Tratamentos para o Cabelo",
      "Clássico" : 0.11,
      "Premium" : 0.16
    },
    {
      "nome" : "Calças",
      "Clássico" : 0.14,
      "Premium" : 0.19
    },
    {
      "nome" : "Fones e Headsets",
      "Clássico" : 0.13,
      "Premium" : 0.18
    },
    {
      "nome" : "Camisolas e moletons",
      "Clássico" : 0.14,
      "Premium" : 0.19
    },
    {
      "nome" : "Botas",
      "Clássico" : 0.14,
      "Premium" : 0.19
    },
    {
      "nome" : "Bicicletas",
      "Clássico" : 0.115,
      "Premium" : 0.165
    },
    {
      "nome" : "HDs e SSDs",
      "Clássico" : 0.13,
      "Premium" : 0.18
    },
    {
      "nome" : "Roteadores",
      "Clássico" : 0.13,
      "Premium" : 0.18
    },
    {
      "nome" : "Relógios de Pulso",
      "Clássico" : 0.14,
      "Premium" : 0.19
    },
    {
      "nome" : "Smartwatches",
      "Clássico" : 0.11,
      "Premium" : 0.16
    },
    {
      "nome" : "Computadores",
      "Clássico" : 0.11,
      "Premium" : 0.16
    },
    {
      "nome" : "Impressoras",
      "Clássico" : 0.11,
      "Premium" : 0.16
    },
    {
      "nome" : "Televisores",
      "Clássico" : 0.11,
      "Premium" : 0.16
    },
    {
      "nome" : "Caixas de Som e Autofalantes",
      "Clássico" : 0.13,
      "Premium" : 0.18
    },
    {
      "nome" : "Media Streaming",
      "Clássico" : 0.11,
      "Premium" : 0.16
    }
  ]

  return (
    <div className="App">
      <Header />
      <BoxForm categorias={categorias} />


    </div>
  );
  
}

export default App;
