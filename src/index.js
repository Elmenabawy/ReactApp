import React from 'react';
import { createRoot } from 'react-dom/client'
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
