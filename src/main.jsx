import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
// import Header from './components/Header'
import Dashboard from './scenes/dashboard'
import Team from './scenes/team/Index'


ReactDOM.render(
  <React.StrictMode>
    <Router>
          <Routes>
            <Route path="/" element={<App/>}>
              <Route index element={<Dashboard/>} />
              <Route path="team" element={<Team/>} />
            </Route>
          </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)