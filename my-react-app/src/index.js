import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Або './App.css', залежно від того, де твої стилі
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);