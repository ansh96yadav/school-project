import React, { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'
import SignUp from './components/SignUp'
import School from './components/School'
import Chatbot from './components/Chatbot'
import { Outlet } from 'react-router-dom'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
  const[isLogin, setIslogin] = useState(true)

  

  return (
    <div>
      <div>
      
        <HomePage/>
    </div>
    {!isLogin && <SignUp/>
    }
      
    </div>
  )
}

export default App
