import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import {useState} from 'react'
import Formulario from './Components/Formulario';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Formulario />
      <Footer />
      
    </div>
  );
  
}

export default App;
