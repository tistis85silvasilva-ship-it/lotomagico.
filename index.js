// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom' se estiver no React 17

const rootElement = document.getElementById("root");

// Versão para React 18:
const root = ReactDOM.createRoot(rootElement);
root.render(<h1>Projeto React funcionando! 🧠✨</h1>);

// --- Se estiver usando React 17, use isto em vez:
//
// ReactDOM.render(<h1>Projeto React funcionando! 🧠✨</h1>, rootElement);
