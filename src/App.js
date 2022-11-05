import Boton from './componentes/Boton';
import './App.css';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {


  const [cantidadClicks, setCantidadClicks] = useState(0);


  const sumarClick = () => {
    setCantidadClicks(cantidadClicks + 1);
  };

  const reiniciarClick = () => {
    setCantidadClicks(0);
  };


  return (
    <div className="App">
      <div className='header'>
        <header className='texto'> Gracias por visitar mi pagina web </header>
      </div>
      <div className='contenidoPrincipal'>
        <Contador cantidadClicks={cantidadClicks}/>
        <div className='botones'>
          <Boton texto='Click' botonDeClick={true} manejarClick={sumarClick}/>
          <Boton texto='Reiniciar' botonDeClick={false} manejarClick={reiniciarClick}/>
        </div>
      </div>
    </div>
  );
}

export default App;
