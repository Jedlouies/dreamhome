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
                <h1>Hello, {user.firstName} {user.lastName}</h1>
            </div>
            <div className='main-content'>
                <div className='left-content'>

                </div>
                <div className='right-content'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default dashboard