import React from 'react'
import '../hojas-de-estilo/BotonClear.css'

export default function BotonClear(props) {
  return (
    <button className='boton-clear'
      onClick={props.manejarClear}>
      {props.children}
    </button>
  )
}
