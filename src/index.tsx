import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './i18n/config';
import './main.css';

const rootEl = document.getElementById('root');

if (!rootEl) {
  console.log('Unable to render a React app: HTML element with id "root" is missing');
} else {
  const root = createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}