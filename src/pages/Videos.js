import React from 'react';

import SidebarNav from '../components/SidebarNav';
import AllVideos from '../components/AllVideos';

const Videos = () => {
    return (
        <div className='row w-100'>
            <div className='col-12'>
                <SidebarNav />
                <div className='menu-content grey pt-5'>
                    <AllVideos />
                </div>
            </div>
        </div>
    )
}

export default Videos;
