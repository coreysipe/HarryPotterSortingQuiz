import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Render your HTML page directly here
const rootElement = document.getElementById('root');
const htmlContent = (
  <div>
    <h1>Hello World!</h1>
    <p>This is my HTML page.</p>
  </div>
);

ReactDOM.createRoot(rootElement).render(htmlContent);

reportWebVitals();
