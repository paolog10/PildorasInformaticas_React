import logo from './logo.svg';
import './App.css';
import {useRef} from 'react'

function App() {
  //no se necesita renderizar elementos, ni actualizar la pagina. Usar useRef
  
  //se almacena el valor que el cliente ingresa en el cuadro de texto
  const euroRef = useRef();

  //almacena el resultado, no se necesita renderizar el componente 
  const resultafoRef = useRef();

  //funcion que calcula la conversion
  const calcularConversion = () => {
    //valor actual de lo que ingresó el cliente
    const eurosValor=parseFloat(euroRef.current.value);
    
    //almacena el resultado de la conversión
    const dolares = eurosValor * 1.08    //02/06/2024 1dolar=1.08euros

    //mostrar el resultado
    resultafoRef.current.innerHTML =  dolares.toFixed(2) + 'U$S'
  }

  return (
    <div>
      <h1>Conversor Euro-Dólar</h1>
      
      <input 
        type='text'
        ref={euroRef} /*link a euroRef */
        className='centrar-elementos'
        placeholder='Ingrese valor en euros'
      >
      </input>
      <br/>

      <button
        onClick={calcularConversion}
        className='centrar-elementos'
      >
        Convertir
      </button>
      <br/>

      <div
        ref={resultafoRef}
        className='centrar-elementos resultado'
      >
      </div>
    </div>
  );
}

export default App;
