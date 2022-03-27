import React from "react";

const Paragrafo = ({color, lista}) => {

    return (
        <>
        {lista.map((key, i) =>
            <p key={i} style={{color: `${color}`}}>{lista[i].nome}</p>
        )}
        </>
    )
}

export default Paragrafo