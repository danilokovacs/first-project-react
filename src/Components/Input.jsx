import React, { useState } from "react";

const Input = ({texto, value, setValue, lista, setLista}) => {

    const[digitado, setDigitado] = useState('')

    function palavra(value){
        if(value === "Jair"){
            window.alert("Ops, ele não")
        }else{
            setDigitado(value)
        }
    }

    console.log(digitado)

    function adicionarPalavra(){
        setLista([
            ...lista,
            {nome: digitado}
        ])
        setValue('')
    }

    return(
        <>
        <label>{texto}</label>
        <input
        value={value}
        onChange ={({target}) => setValue(target.value)}
        onBlur= {({target}) => palavra(target.value)}
        />
        <button onClick={adicionarPalavra}>Adicionar</button>
        </>
    )
}

export default Input