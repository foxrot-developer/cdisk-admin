import React from 'react';

import '../assets/css/dashboard.css';
import SidebarNav from '../components/SidebarNav';
import DashboardCards from '../components/DashboardCards';

const Dashboard = () => {
    return (
        <div className='row w-100'>
            <div className='col-12'>
                <SidebarNav />
                <div className='menu-content grey'>
                    <DashboardCards />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
