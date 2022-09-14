import React from 'react';

import SidebarNav from '../components/SidebarNav';
import AllContacts from '../components/AllContacts';

const Contacts = () => {
    return (
        <div className='row w-100'>
            <div className='col-12'>
                <SidebarNav />
                <div className='menu-content grey pt-5'>
                    <AllContacts />
                </div>
            </div>
        </div>
    )
}

export default Contacts;
