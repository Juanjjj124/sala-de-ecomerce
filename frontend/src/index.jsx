import React from 'react';
import ReactDOM from 'react-dom/client';  // Nota el cambio en la importación
import { BrowserRouter } from 'react-router-dom';
import './styles/body.css';
import App from './componentes/App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Crear el root

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
