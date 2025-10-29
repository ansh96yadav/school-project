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
        <p>(Under Construction)</p>
        <Link to='/teacherhomeworkpage' className='m-auto'><button className='w-fit h-fit cursor-pointer px-4 py-2 rounded-[10px] bg-amber-300'>Skip This Page Please</button></Link>
      </div>
    </div>
  )
}

export default StudentLogin
