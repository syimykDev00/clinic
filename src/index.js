import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/style.scss'
import 'react-router-dom'
import 'react-icons'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Layout from "./components/layout/layout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Layout>
              <App />
          </Layout>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
