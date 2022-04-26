import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import reducer from './redux/reducer';

import {configureStore} from '@reduxjs/toolkit'


const store = configureStore({"reducer":reducer})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
    <App />
    </Provider>  
  
);

reportWebVitals();
