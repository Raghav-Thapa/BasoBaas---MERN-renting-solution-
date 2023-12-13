import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap"
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "../src/assets/css/topbar.css"
import "../src/assets/css/header.css"
import "../src/assets/css/banner.css"
import Routing from './config/routing.config.jsx';
import { Provider} from "react-redux";
import store from './config/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Routing/>
    </Provider>
  </React.StrictMode>,
)
