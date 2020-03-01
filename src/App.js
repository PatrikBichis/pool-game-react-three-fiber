import React from 'react';
import { Canvas } from 'react-three-fiber';
import './App.css';
import Scene from './views/Scene';

function App() {
  return (
   <Canvas>
     <Scene></Scene>
   </Canvas>
  );
}

export default App;
