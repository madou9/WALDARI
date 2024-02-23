import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import AppRouters from './AppRouters'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppRouters />
    </Router>
  </React.StrictMode>,
)
