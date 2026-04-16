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
                        <div className='upper-content-wrapper'>
                            <h3>Property Statistics</h3>
                            <p>Track Properties</p>
                        </div>
                    </div>
                    <div className='lower-content'>
                        <div className='lower-content-wrapper'>
                            <h3>Quick Action</h3>
                            <div className='buttons-container'>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-ruled" viewBox="0 0 16 16">
                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h7v1a1 1 0 0 1-1 1zm7-3H6v-2h7z"/>
                                    </svg>
                                    Generate Report
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
                                    </svg>
                                    Add Staff
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-add" viewBox="0 0 16 16">
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 1-.5-.5V7.207l5-5 6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 1 0 1 0v-1h1a.5.5 0 1 0 0-1h-1v-1a.5.5 0 0 0-.5-.5"/>
                                    </svg>
                                    Add New Property
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-gear" viewBox="0 0 16 16">
                                    <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z"/>
                                    <path d="M11.886 9.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.044c-.613-.181-.613-1.049 0-1.23l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                                    </svg>
                                    Update Rent Price
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default dashboard