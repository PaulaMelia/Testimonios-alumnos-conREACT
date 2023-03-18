import React from 'react';
import '../styles/Testimonios.css'

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
        <img className='imagen-testimonio' 
        src= {require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Foto de-${props.nombre}`}
        title={`Foto del testimonio ${props.nombre}`} 
        />
      <div className='contenedor-textotestimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong> </p>
        <p className='texto-testimonio'>"{props.textotestimonio}"</p>
      </div>
      
    </div>
  );

}

export default Testimonio;



