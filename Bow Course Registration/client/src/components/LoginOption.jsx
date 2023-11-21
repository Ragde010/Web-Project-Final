import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation'
import Footer from './Footer'
// import '../CSS/LoginOption.css'


function LoginOption() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Navigation />
    
    <div className='page d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Choose for Login</h2>
            <div className='mb-3'>
            <Link to = "/login" className="btn btn-primary w-100 text-decoration-none text-bold">Student</Link>
            </div>

            <div className='mb-3'>
            <Link to = "/employee-login" className="btn btn-primary w-100 text-decoration-none text-bold">Employee</Link>
            </div>
        </div>

    </div>
    <Footer currentYear={currentYear} />
    </div> 
  )
}

export default LoginOption