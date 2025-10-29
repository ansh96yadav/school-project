import React from 'react'
import { Link } from 'react-router-dom'

function StudentLogin() {
  return (
    <div>
      <p>Student Login Page</p>
      <div>
        <div><label htmlFor='name'>Full Name:</label>
        <input type='text' id='name' placeholder='Full Name'/></div>
        <div><label htmlFor='dob'>Date Of Birth:</label>
        <input type='text' id='dob' placeholder='Date Of Birth'/></div>
        <div><label htmlFor='admissionNo.'>Admission Number:</label>
        <input type='number' id='admissionNo.' placeholder='Admission Number'/></div>
        <Link to='/teacherhomeworkpage'><button>Login</button></Link>
      </div>
    </div>
  )
}

export default StudentLogin
