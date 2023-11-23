import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "../src/assets/css/topbar.css"
import "../src/assets/css/header.css"
// import './index.css'
import { Topbar } from './pages/topbar.component.jsx'
import Header from './pages/header.component.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Topbar/>
    <Header/>
  </React.StrictMode>,
)
