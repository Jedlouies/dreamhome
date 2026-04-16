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
                                    <div className='inner-card-wrapper'>
                                        <div className='upper-card'>
                                            <div className='icon-box'>
                                                <img src="/house.png" alt="properties" />
                                            </div>
                                            <div className='ratings'>
                                                <span>23.35% ↑</span>
                                            </div>
                                        </div>
                                        <div className='lower-card'>
                                            <span>10</span>
                                            <p>Total Properties Managed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='inner-card-wrapper'>
                                        <div className='upper-card'>
                                            <div className='icon-box'>
                                                <img src="/real-estate.png" alt="active-leases" />
                                            </div>
                                            <div className='ratings'>
                                                <span>35.5% ↑</span>
                                            </div>
                                        </div>
                                        <div className='lower-card'>
                                            <span>1023</span>
                                            <p>Active Leases</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='cards-container'>
                                <div className='card'>
                                    <div className='inner-card-wrapper'>
                                        <div className='upper-card'>
                                            <div className='icon-box'>
                                                <img src="/deal.png" alt="properties" />
                                            </div>
                                            <div className='ratings'>
                                                <span>6.35% ↑</span>
                                            </div>
                                        </div>
                                        <div className='lower-card'>
                                            <span>303</span>
                                            <p>Currently Available</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='inner-card-wrapper'>
                                        <div className='upper-card'>
                                            <div className='icon-box'>
                                                <img src="/city.png" alt="total properties" />
                                            </div>
                                            <div className='ratings'>
                                                <span>1.35% ↑</span>
                                            </div>
                                        </div>
                                        <div className='lower-card'>
                                            <span>623</span>
                                            <p>Total Properties</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-long'>
                            <div className='card-long-wrapper'>
                                <h3>Pending Inspection</h3>
                                <p>Pending Inspection Last 6 Days</p>
                            </div>
                        </div>
                    </div>
                    <div className='chart-container'>

                    </div>
                </div>
                <div className='right-content'>
                    <div className='upper-content'>

                    </div>
                    <div className='lower-content'>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default dashboard