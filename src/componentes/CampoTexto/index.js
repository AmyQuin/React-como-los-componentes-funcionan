import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeholderModificador=`${props.placeholder}...`

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-texto">
        <label>{ props.titulo }</label>
        <input 
        placeholder={placeholderModificador} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        />
    </div>
}
//placeholder "es el texto que aparece atras antes de comenzar a escribir"
//props propiedades de los componentes
//recibimos como parametro props, props sera un objeto con todas las propiedades que queramos mandar y como objeto accedemos al titulo

export default CampoTexto