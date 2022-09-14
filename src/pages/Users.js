import React from 'react';

import SidebarNav from '../components/SidebarNav';
import AllUsers from '../components/AllUsers';

const Users = () => {
    return (
        <div className='row w-100'>
            <div className='col-12'>
                <SidebarNav />
                <div className='menu-content grey pt-5'>
                    <AllUsers />
                </div>
            </div>
        </div>
    )
}

export default Users;
