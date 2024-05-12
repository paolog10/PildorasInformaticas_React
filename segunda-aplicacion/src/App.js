import './App.css';

//componente
function App() {
  
  const elemento = <h1 className="centrar-titulo">¡Hola Mundo!</h1>;
  const elemento2 = suma(7, 9);

  //crear nodo padre para devolver los 2 nodos hijos 
  return <div><div>{elemento}</div><div>Suma: {elemento2}</div></div>
}

//no se considera componente
function suma(a, b) {
  return a + b
}

export default App;
