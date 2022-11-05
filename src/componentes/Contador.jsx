import React from "react";
import '../styles/Contador.css';

function Contador({ cantidadClicks }) {
  return(
    <div className='contador'>{cantidadClicks}</div>
  )
};

export default Contador;