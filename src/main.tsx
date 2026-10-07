import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Sales from './Sales';
import './styles.css';
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode>{location.pathname.startsWith('/demo')?<App/>:<Sales/>}</React.StrictMode>);
