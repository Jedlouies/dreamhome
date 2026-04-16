import React from 'react'
import SupervisorNav from '../Layout/SupervisorNav';
import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import '../../styles/dashboard.css';

function dashboard() {

    const [user, setUser] = useState('');
   
    useEffect(() => {
        const savedUser = localStorage.getItem('staffUser');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

  return (
    <div className='dashboard-container'>
        <SupervisorNav />
        <div className='dashboard-content'>
            <div className='welcome-content'>
                <h1>Hello there, <span style={{color: '#853953'}}>{user.firstName}!</span></h1>
                <p>Check the current records and manage your tasks.</p>
            </div>
            <div className='main-content'>
                <div className='left-content'>
                    <div className='content-wrapper'>
                        <div className='cards-wrapper'>
                            <div className='cards-container'>
                                <div className='card'>

                                </div>
                                <div className='card'>

                                </div>

                            </div>
                            <div className='cards-container'>
                                <div className='card'>

                                </div>
                                <div className='card'>

                                </div>
                            </div>
                        </div>
                        <div className='card-long'>

                        </div>
                    </div>
                    <div className='chart-container'>

                    </div>
                </div>
                <div className='right-content'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default dashboard