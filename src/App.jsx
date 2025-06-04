import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Showroom from './pages/Showroom'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Logo from './components/Logo'
import Settings from './pages/Settings'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
       <Route path="/" element={ <Home /> }  />
       <Route path="/login" element={ <Login /> }  />
       <Route path="/register" element={ <Register /> }  />
       <Route path="/profile" element={ <Profile /> }  />
       <Route path="/showroom" element={ <Showroom /> }  />
       <Route path="/contact" element={ <Contact /> }  />
       <Route path="/settings" element={ <Settings /> }  />
       <Route path="/dashboard" element={ <Dashboard /> }  />
       <Route path="/*" element={ <NotFound /> }  />
      </Routes>
      <Footer />
    </>
  )
}

export default App