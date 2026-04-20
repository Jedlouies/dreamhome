import React from 'react'
import '../../styles/nav.css';
import { useNavigate } from 'react-router-dom';

function GuestNav() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='supervisor-nav-container'>
        <div className='supervisor-nav-wrapper'>
            <div className='logo'/>
            <div className='nav-buttons'>
                <button onClick={()=>handleNavigation('/home')}>HOME</button>
                <button onClick={()=>handleNavigation('/user/viewing')}>VIEWINGS</button>
                <button onClick={()=>handleNavigation('/user/leases')}>LEASES</button>
                <div className='profile-btn'>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default GuestNav