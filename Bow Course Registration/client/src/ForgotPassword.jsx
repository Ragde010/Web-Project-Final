import React, {useState} from 'react'
import Footer from './components/Footer';
import Navigation from './Navigation';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import {sendPasswordResetEmail} from 'firebase/auth'
import { Alert } from 'react-bootstrap';

function ForgotPassword() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError("");
            // Validation check for empty email
        if (!email) {
            setError("Email cannot be empty");
            return;
        }
        try {
          sendPasswordResetEmail(auth,email);
          alert('Password reset email sent. Check your inbox.');
          navigate('/newlogin');
        } catch (error) {
          setError(`Error: ${error.message}`);
        }
      };
  return (
    <div>
    <Navigation />
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form onSubmit={handleResetPassword}>
          <div className="mb-3">
            {error && <Alert>{error}</Alert>}
          <label className='text-bold'>Enter you Email:</label>
            <input type="email" className='form-control rounded-1 border-2' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className='btn btn-success mt-3 px-3'>Reset Password</button>
            
            <Link to="/newlogin" className='btn btn-primary mt-3'>Back to Login</Link>
          </div>
        </form>
      </div>
    </div>

    <Footer currentYear={currentYear} />
  </div>
  )
}

export default ForgotPassword