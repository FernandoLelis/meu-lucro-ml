import React from "react";

export default function BoxRes(props) {

    return (
        <div className="boxRes">
            Nome: {props.nome} <br />
            Custo: {props.custo}  
        </div> 
    );
}