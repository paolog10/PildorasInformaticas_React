import './App.css';
import React, { useState } from "react";

//componente
function App() {

  const elemento = <h1 className="centrar-titulo">¡Hola Mundo!</h1>;
  const elemento2 = <h2>{suma(7, 9)}</h2>; {/*el codigo js debe ir entre llaves*/ }

  //definir el estado para almacenar el estado de la suma
  const [resultado, setResultado] = useState(null);
  const botonPulsado = () => {
    const result = suma(7, 5);
    setResultado(result);
  }

  //crear nodo padre para devolver los 2 nodos hijos 
  return (
    <div>
      <button
        style={{ marginTop: "10px", marginLeft: "10px" }} /*estilo inline*/
        onClick={botonPulsado}
      >
        Pulsar
      </button>

      <div>
        {elemento}
      </div>

      <div> {/*condicional*/}
        {resultado != null && 
          <h2>
            Resultado: {resultado}
          </h2>}
      </div>
    </div>
  )
}

//no se considera componente
function suma(a, b) {
  return a + b
}

export default App;
