import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import NotFound from './components/NotFound'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
   <div className='w-screen h-screen flex flex-col overflow-x-hidden '>
       
    <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

    {/* Routing login  */}
    <Routes>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
          <Route path='/signup' element={<SignUp  setIsLoggedIn={setIsLoggedIn} />}/>
          <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
            }/>
          <Route path='*' element={<NotFound/>}/>
    </Routes>
   </div>
  )
}

export default App
