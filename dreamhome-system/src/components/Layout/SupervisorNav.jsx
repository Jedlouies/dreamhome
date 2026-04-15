import React from 'react'
import '../../styles/nav.css';

function SupervisorNav() {
  return (
    <div className='supervisor-nav-container'>
        <div className='supervisor-nav-wrapper'>
            <div className='logo'/>
            <div className='nav-buttons'>
                <button>DASHBOARD</button>
                <button>STAFF</button>
                <button>PROPERTIES</button>
                <button>RENTERS</button>
                <button>VIEWINGS</button>
                <button>LEASES</button>
                <button>INSPECTIONS</button>
                <button>REPORTS</button>
                <div className='profile-btn'>
          
                </div>
            </div>
        </div>
    </div>
  )
}

export default SupervisorNav