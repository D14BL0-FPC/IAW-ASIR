// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // <--- DEJAS SOLO ESTA
import './index.css'
// ... otras importaciones

// LA LÍNEA DUPLICADA SE HA BORRADO

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)