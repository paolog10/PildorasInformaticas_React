import logo from './logo.svg';
import './App.css';
import {useRef, useState, useEffect} from 'react'

function App() {
  
  const [valorCambio, setValorCambio] = useState(null)
  
  //se almacena el valor que el cliente ingresa en el cuadro de texto
  const euroRef = useRef();
  
  //almacena el resultado, no se necesita renderizar el componente 
  const resultafoRef = useRef();
  
  //Programación Asíncrona
  useEffect(() => {
    const llamaApiCambio = async() => {
      try {
        const respuesta = await fetch("https://v6.exchangerate-api.com/v6/dd19051bc803b874d9859518/latest/EUR");
        const datos = await respuesta.json();

        console.log(datos);
        
        setValorCambio(datos.conversion_rates.USD);

      } catch (error) {
        console.error("Error al acceder a la API: ", error)
      }
    };
    
    llamaApiCambio();
  }, []);
  
  //funcion que calcula la conversion
  const calcularConversion = () => {
    //valor actual de lo que ingresó el cliente
    const eurosValor=parseFloat(euroRef.current.value);
    
    //almacena el resultado de la conversión
    const dolares = eurosValor * valorCambio;

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
