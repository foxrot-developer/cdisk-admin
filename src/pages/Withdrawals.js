import React from 'react';

import SidebarNav from '../components/SidebarNav';
import AllWithdrawals from '../components/AllWithdrawals';

const Withdrawals = () => {
    return (
        <div className='row w-100'>
            <div className='col-12'>
                <SidebarNav />
                <div className='menu-content grey pt-5'>
                    <AllWithdrawals />
                </div>
            </div>
        </div>
    )
}

export default Withdrawals;
