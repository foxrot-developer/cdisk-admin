import React from 'react';

import SidebarNav from '../components/SidebarNav';
import AllReports from '../components/AllReports';

const Reports = () => {
    return (
        <div className='row w-100'>
            <div className='col-12'>
                <SidebarNav />
                <div className='menu-content grey pt-5'>
                    <AllReports />
                </div>
            </div>
        </div>
    )
}

export default Reports;
