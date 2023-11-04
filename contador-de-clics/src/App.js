import './App.css';
import freeCodeCampLogo from './img/freeCodeCamp-logo.png';
import Boton from './components/Boton'
import Contador from './components/Contador';
// Hook -> useState
import { useState } from 'react';

function App() {
  // arreglo con un estado(valor) y una funcion. Pasamos el valor incial (0).
  let [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={numClics}
        />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
};

export default App;
