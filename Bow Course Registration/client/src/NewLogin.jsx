// import React, {useState} from 'react'
import Footer from "./components/Footer";
import { useState } from "react";
import Navigation from "./Navigation";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from './context/UserAuthContext';
import { Alert } from 'react-bootstrap';

function NewLogin() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {logIn} = useUserAuth();

    const handleSubmit  = async(e) => {
        e.preventDefault();
        setError("")
        try {
            await logIn(email, password)
            navigate('/dashboard');
        } catch (error) {
            setError(error.message)
        }

    }
  return (
    <div>
    <Navigation />
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">
              <strong>Email</strong> 
            </label>
            <input
              type="text"
              name="username"
              autoComplete="off"
              placeholder=""
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
           
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter a Password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="Submit" className="btn btn-primary w-100">
            <strong>Login</strong>
          </button>
          <Link to= '/forgot-password'>Forgot Password?</Link>
          <div className="text-center mt-3">
            <hr className="my-2" />
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-success w-100">Sign In with Phone Number</button>
          </div>
          <p className="mt-2">
            Don't have an Account?{" "}
            <Link to="/newsignup" className="text-decoration-none">
              <strong>Sign Up Here</strong>
            </Link>
          </p>
          
        </form>
      </div>
    </div>

    <Footer currentYear={currentYear} />
  </div>
  )
}

export default NewLogin