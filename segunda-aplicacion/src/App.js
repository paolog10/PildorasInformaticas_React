import './App.css';
import React, { useRef } from "react";
import video from './assets/Figurines-tv - Article - Lavis-glacis (acrylique).mp4'

//useRef se puede acceder a un elemento del DOM
function App() {

  const videoRef = useRef(null);
  const videoPlay = () => {
    videoRef.current.play();
  };
  const videoPause = () => {
    videoRef.current.pause();
  }

  return (
    <div>
      <video
        width={400}
        ref={videoRef}  
      >
        <source
          src={video}
          type='video/mp4'
        >
        </source>
      </video>
      <div>
        <button onClick={videoPlay}>Play</button>
        <button onClick={videoPause}>Pause</button>
      </div>
    </div>

  );
}

/*
useState: gestionar el estado de un componente, SI necesita renderizar, Es reactivo
useRef: para cambiar su estado NO necesita renderizar, No es reactivo
*/
export default App;
