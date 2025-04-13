import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ManifestProvider } from './context/ManifestContext';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ManifestProvider>
        <App />
      </ManifestProvider>
    </BrowserRouter>
  </React.StrictMode>
);