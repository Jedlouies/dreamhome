import React, { useState } from 'react'; 
import '../../styles/staff.css';
import SupervisorNav from '../Layout/SupervisorNav';

function Staff() {
  const [isOpen, setIsOpen] = useState(false);
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('Select Branch');

  const branches = ['Cagayan de Oro', 'Malaybalay', 'Iligan', 'Marawi'];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleFilterDropdown = () => setFilterIsOpen(!isOpen);

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
                <span style={{ marginLeft: 'auto' }} className={`arrow ${isOpen ? 'up' : 'down'}`}> ▾ </span>
              </button>

              {isOpen && (
                <div className="dropdown-menu">
                  {branches.map((branch) => (
                    <p 
                      key={branch} 
                      onClick={() => handleSelect(branch)}
                      className="dropdown-item"
                    >
                      {branch}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className='staff-add-btn'>
              <button className='add-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
                Add Staff
              </button>
            </div>
          </div>
        </div>
        <div className='staff-table-container'>
            <div className='staff-table-wrapper'>
              <div className='table-header'>
                  <input type="text" placeholder='⌕ Search...'/>
                  <button className='filter-btn'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
                      </svg>
                      Filter
                  </button>
              </div>
            </div> 
        </div>
      </div>
    </div>
  );
}

export default Staff;