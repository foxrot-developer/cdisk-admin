import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { FaFileVideo, FaMoneyCheck } from 'react-icons/fa';
import { TiContacts } from 'react-icons/ti';
import { AiTwotoneHome } from 'react-icons/ai';
import { MdOutlineReportProblem } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../assets/css/sidebar.css';
import { adminLogout } from '../store/StoreIndex';

const SidebarNav = () => {

    const history = useNavigate();
    const dispatch = useDispatch();

    const [expand, setExpand] = useState(false);

    return (
        <React.Fragment>
            <div className='row w-100 pt-2 side-top'>
                <div className='col-12 text-start ms-3 d-flex align-items-center'>
                    <h3 className='fw-bold logo-heading'>CDISK ADMIN</h3>
                    <GiHamburgerMenu className='menu-icon me-2' onClick={() => setExpand(!expand)} />
                    <button className='btn btn-success' onClick={() => dispatch(adminLogout(history))}>LOGOUT</button>
                </div>
            </div>
            <div className='container-main'>
                <div className={expand ? `sidebar open` : `sidebar`}>
                    <div className='row'>
                        <div className='col-12 pt-2'>
                            <div className='menu-item' onClick={() => history('/')}>
                                <AiTwotoneHome className='menu-item-icon mx-2' /><p className='menu-item-name'>Dashboard</p>
                            </div>
                            <hr className='dash-divider' />
                            <div className='menu-item' onClick={() => history('/admin/users')}>
                                <FiUsers className='menu-item-icon mx-2' /><p className='menu-item-name'>Users</p>
                            </div>
                            <hr className='dash-divider' />
                            <div className='menu-item' onClick={() => history('/admin/videos')}>
                                <FaFileVideo className='menu-item-icon mx-2' /><p className='menu-item-name'>Videos</p>
                            </div>
                            <hr className='dash-divider' />
                            <div className='menu-item' onClick={() => history('/admin/withdrawals')}>
                                <FaMoneyCheck className='menu-item-icon mx-2' /><p className='menu-item-name'>Withdrawals</p>
                            </div>
                            <hr className='dash-divider' />
                            <div className='menu-item' onClick={() => history('/admin/contacts')}>
                                <TiContacts className='menu-item-icon mx-2' /><p className='menu-item-name'>Contact Us</p>
                            </div>
                            <hr className='dash-divider' />
                            <div className='menu-item' onClick={() => history('/admin/reports')}>
                                <MdOutlineReportProblem className='menu-item-icon mx-2' /><p className='menu-item-name'>Reports</p>
                            </div>
                            <hr className='dash-divider' />
                            <div className='menu-item' onClick={() => history('/admin/settings')}>
                                <FiSettings className='menu-item-icon mx-2' /><p className='menu-item-name'>Settings</p>
                            </div>
                            <hr className='dash-divider' />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SidebarNav;
