import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "../src/assets/css/topbar.css"
import "../src/assets/css/header.css"
import "../src/assets/css/banner.css"
// import './index.css'
import { Topbar } from './pages/topbar.component.jsx'
import Header from './pages/header.component.jsx'
import Banner from './pages/banner.component.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Topbar/>
    <Header/>
    <Banner/>
  </React.StrictMode>,
)
