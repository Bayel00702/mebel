import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import Context from "./config/context/context";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Context>
            <App />
        </Context>
    </BrowserRouter>
);
