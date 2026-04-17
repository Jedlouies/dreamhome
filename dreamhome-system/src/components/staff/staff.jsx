import React, { useState } from 'react'; 
import '../../styles/staff.css';
import SupervisorNav from '../Layout/SupervisorNav';

function Staff() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('Select Branch');

  const branches = ['Cagayan de Oro', 'Malaybalay', 'Iligan', 'Marawi'];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (branch) => {
    setSelectedBranch(branch);
    setIsOpen(false);
  };

  return (
    <div className='staff-container'>
      <SupervisorNav />
      <div className='staff-content'>
        <div className='title-page'>
          <h1>Staff Management</h1>
          <p>Welcome to the Staff Management page.</p>
        </div>

        <div className='staff-menu-bar'>
          <div className='staff-menu-wrapper'>
            <div className="dropdown">
              <button 
                className='branch-selection-btn' 
                onClick={toggleDropdown}
              >
                <div className='button-square'></div>
                {selectedBranch}
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}> ▾ </span>
              </button>

              {isOpen && (
                <ul className="dropdown-menu">
                  {branches.map((branch) => (
                    <li 
                      key={branch} 
                      onClick={() => handleSelect(branch)}
                      className="dropdown-item"
                    >
                      {branch}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;