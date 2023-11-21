import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiSearch, FiLogOut,FiLayout } from 'react-icons/fi';
import { FaUser, FaEnvelope, FaBookOpen, FaBook} from 'react-icons/fa';
import '../CSS/Dashstyle.css'
import { useUserAuth } from '../context/UserAuthContext';
import {useNavigate} from 'react-router-dom';
import Settings from './Settings';


function Dashboard() {
    const [activeComponent, setActiveComponent] = useState('Dashboard');
    const {user, logOut} = useUserAuth();
    const navigate = useNavigate();
   
    console.log(user)
    const handleLogout = async() => {
      try {
        await logOut();
        navigate('/newlogin');
      } catch (error) {
        console.log(error.message);
      }
    }

  return (
    <div className="container-fluid ">
     <div className="row">
        <div className="col-3 sidebar">
             <div className="user-profile">
             <FaUser className="user-icon"/>
                <p className='text-bold'>{user && user.firstname} {user && user.lastname}</p>
                 <p>Student ID</p>
             </div>
             <ul className="nav-menu">
                <li onClick={() => setActiveComponent('Dashboard')}><FiLayout style={{ fontSize: '24px', marginRight: '10px' }}/>Dashboard</li>
                <li onClick={() => setActiveComponent('Addcourse')}><FaBook style={{ fontSize: '24px', marginRight: '10px' }}/>Add Course</li>
                <li onClick={() => setActiveComponent('Viewcourse')}><FaBookOpen style={{ fontSize: '24px', marginRight: '10px' }}/>View course</li>
                <li onClick={() => setActiveComponent('Message')}><FaEnvelope style={{ fontSize: '24px', marginRight: '10px' }}/>Message</li>
                <li onClick={() => setActiveComponent('Settings')}><FaEnvelope style={{ fontSize: '24px', marginRight: '10px' }}/>Message</li>
          
            </ul>
                <button onClick={handleLogout} className="logout-btn">Log out <FiLogOut/> </button>
       </div>

      <div className="col-9 main-content">
        <div className="d-flex justify-content-between align-items-center mb-3 ">
            <h1 className='text-bold'>Hello, {user.firstname} welcome back!</h1>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <FiSearch  />
                </div>
        </div>
        {activeComponent === 'Dashboard' && <DashboardComponent />}
        {activeComponent === 'Addcourse' && <AddcourseComponent />}
        {activeComponent === 'Viewcourse' && <ViewcourseComponent />}
        {activeComponent === 'Message' && <MessageComponent />}
        {activeComponent === 'Settings' && <Settings />}
      
      </div>
    </div>
  </div>
);
}

function DashboardComponent() {
return (
  <div>
    {/* Your Dashboard content */}
    <h2>Add Course Table and buttons</h2>
  </div>
);
}

function AddcourseComponent() {
return (
    <div className='d-flex vh-100  justify-content-center py-5 '>
        <div className='w-50 h-50 bg-white mt-5 rounded p-3 shadow-lg border '>
          <form>
            <h2>Add New Course</h2>
            <div className='mb-2'>
              <label htmlFor="">Course Code</label>
              <input type="text" placeholder="Enter course code" className='form-control rounded-0' />
                                                                                                
            </div>
            <div className='mb-2'>
              <label htmlFor="">Course Name</label>
              <input type="text" placeholder="Enter coursename" className='form-control rounded-0'
               />
            </div>
            <div className='mb-2'>
              <label htmlFor="">Course Start</label>
              <input type="date" placeholder="Enter course c" className='form-control rounded-0'
             />
            </div>
            <div className='mb-2'>
              <label htmlFor="">Course End</label>
              <input type="date" placeholder="Enter course code" className='form-control rounded-0'
              />
            </div>
            <button type="submit"  className='btn btn-primary w-auto mt-4 margin'>Add Course</button>

          </form>
        </div>
    </div>
);
}
function ViewcourseComponent() {
return (
  <div>
    {/* Your Top List content */}
    <h2>View my Course</h2>
  </div>
);
}
function MessageComponent() {
return (
  <div>
    {/* Your Top List content */}
    <h2>View my Course</h2>
  </div>
);
}


export default Dashboard