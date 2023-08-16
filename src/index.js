import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import css from './index.module.css';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className={css.container}>
      <App />
    </div>
  </BrowserRouter>
);



