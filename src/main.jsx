import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Dashboard from './scenes/dashboard'
import Team from './scenes/team/Index'
import Contacts from './scenes/contacts'
import Invoices from './scenes/invoices/index'
import Form from './scenes/form/index'
import Calendar from './scenes/calendar/index'
import Faq from './scenes/faq/index'
import Bar from './scenes/bar/index'
import Pie from './scenes/pie/index'
import Line from './scenes/line/index'
import Geography from './scenes/geography/index'
// import Menu from './scenes/Menu'
import Menus from './scenes/Menu'




ReactDOM.render(
  <React.StrictMode>
    <Router>
          <Routes>
            <Route path="/" element={<App/>}>
              <Route index element={<Dashboard/>} />
              <Route path='home' element={<Dashboard/>} />
              <Route path="team" element={<Team/>} />
              <Route path="contacts" element={<Contacts/>} />
              <Route path="invoices" element={<Invoices/>} />
              <Route path="form" element={<Form/>} />
              <Route path="calendar" element={<Calendar/>} />
              <Route path="faq" element={<Faq/>} />
              <Route path="invoices" element={<Invoices/>} />
              <Route path="bar" element={<Bar/>} />
              <Route path="pie" element={<Pie/>} />
              <Route path="line" element={<Line/>} />
              <Route path="geography" element={<Geography/>} />
              <Route path="menu" element={<Menus/>} />
            </Route>
          </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)