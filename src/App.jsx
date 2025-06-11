import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from './JS/actions/authActions'
import SuccessNotif from './components/SuccessNotif'
import ErrorsNotif from './components/ErrorNotif'
import "react-toastify/dist/ReactToastify.css";
import CarDescription from './pages/carDescription'
import Loading from './components/Loading'
import ScrollToTop from './components/ScrollToTop'

const App = () => {

  const dispatch = useDispatch()

  const isAuth = useSelector((state) => state.authReducer.isAuth)

  const isLoading = useSelector((state) => state.carReducer.load)

  useEffect(() => {
      if (localStorage.getItem("token")) {
        dispatch(currentUser())
      }
  }, [dispatch])

    const authSuccess = useSelector((state) => state.authReducer.success);
    const authErrors = useSelector((state) => state.authReducer.errors);

    const carSuccess = useSelector((state) => state.carReducer.success);
    const carErrors = useSelector((state) => state.carReducer.errors);

    
  
  return (
    <>
      <Navbar />
      <ScrollToTop /> 
      
      {authSuccess &&
        authSuccess.map((success) => (
          <SuccessNotif key={success.id} success={success} />
        ))}
      {authErrors &&
        authErrors.map((error) => <ErrorsNotif key={error.id} error={error} />)}

      {carSuccess &&
        carSuccess.map((success) => (
          <SuccessNotif key={success.id} success={success} />
        ))}
      {carErrors &&
        carErrors.map((error) => <ErrorsNotif key={error.id} error={error} />)}
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {isAuth && <Route path="/profile" element={<Profile />} />}
        {isAuth &&  <Route path="/showroom" element={<Showroom />} />}
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/carDescription/:id" element={<CarDescription />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App