import React from 'react'
import '../../styles/nav.css';
import { useNavigate } from 'react-router-dom';

function SupervisorNav() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='supervisor-nav-container'>
        <div className='supervisor-nav-wrapper'>
            <div className='logo'/>
            <div className='nav-buttons'>
                <button onClick={()=>handleNavigation('/dashboard')}>DASHBOARD</button>
                <button onClick={()=>handleNavigation('/staff')}>STAFF</button>
                <button onClick={()=>handleNavigation('/properties')}>PROPERTIES</button>
                <button onClick={()=>handleNavigation('/renters')}>RENTERS</button>
                <button onClick={()=>handleNavigation('/viewings')}>VIEWINGS</button>
                <button onClick={()=>handleNavigation('/leases')}>LEASES</button>
                <button onClick={()=>handleNavigation('/inspections')}>INSPECTIONS</button>
                <button>REPORTS</button>
                <div className='profile-btn'>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default SupervisorNav