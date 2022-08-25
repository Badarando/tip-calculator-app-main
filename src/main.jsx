import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { Base } from './styles/elements/Base';
import { Home } from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Base />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
