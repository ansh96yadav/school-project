import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'
import Chatbot from './components/Chatbot'
import SignUp from './components/SignUp'
import School from './components/School'
import Indentifier from './components/Indentifier'
import StudentLogin from './components/StudentLogin'
import TeacherHomeworkPage from './components/TeacherHomeworkPage'
import StudentHomeworkPage from './components/StudentHomeworkPage'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,   // 👈 App is now the layout
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/chatbot', element: <Chatbot /> },
      { path: '/school', element: <School /> },
      
      { path: '*', element: <p>Page not found.</p> },
    ]
  },
{ path: '/identifier', element: <Indentifier/>},
{ path: '/studentlogin', element: <StudentLogin/>},
{ path: '/teacherhomeworkpage', element: <TeacherHomeworkPage/>},
{ path: '/studenthomeworkpage', element: <StudentHomeworkPage/>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
