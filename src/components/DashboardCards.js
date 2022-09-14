import React from 'react';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { FaFileVideo, FaMoneyCheck } from 'react-icons/fa';
import { TiContacts } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { MdOutlineReportProblem } from 'react-icons/md';

import '../assets/css/dashboard-card.css';
import Circles from '../assets/images/circles.svg';

const DashboardCards = () => {

    const history = useNavigate();

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-xs-12 col-md-4'>
                    <div className='dash-card' onClick={() => history('/admin/users')} style={{ 'backgroundImage': `url(${Circles})`, 'backgroundSize': 'cover' }}>
                        <FiUsers className='card-icon' />
                        <h4 className='card-heading'>USERS</h4>
                    </div>
                </div>
                <div className='col-xs-12 col-md-4'>
                    <div className='dash-card' onClick={() => history('/admin/videos')} style={{ 'backgroundImage': `url(${Circles})`, 'backgroundSize': 'cover' }}>
                        <FaFileVideo className='card-icon' />
                        <h4 className='card-heading'>VIDEOS</h4>
                    </div>
                </div>
                <div className='col-xs-12 col-md-4'>
                    <div className='dash-card' onClick={() => history('/admin/withdrawals')} style={{ 'backgroundImage': `url(${Circles})`, 'backgroundSize': 'cover' }}>
                        <FaMoneyCheck className='card-icon' />
                        <h4 className='card-heading'>WITHDRAWAL REQUESTS</h4>
                    </div>
                </div>
                <div className='col-xs-12 col-md-4'>
                    <div className='dash-card' onClick={() => history('/admin/contacts')} style={{ 'backgroundImage': `url(${Circles})`, 'backgroundSize': 'cover' }}>
                        <TiContacts className='card-icon' />
                        <h4 className='card-heading'>CONTACT REQUESTS</h4>
                    </div>
                </div>
                <div className='col-xs-12 col-md-4'>
                    <div className='dash-card' onClick={() => history('/admin/reports')} style={{ 'backgroundImage': `url(${Circles})`, 'backgroundSize': 'cover' }}>
                        <MdOutlineReportProblem className='card-icon' />
                        <h4 className='card-heading'>VIDEO REPORTS</h4>
                    </div>
                </div>
                <div className='col-xs-12 col-md-4'>
                    <div className='dash-card' onClick={() => history('/admin/settings')} style={{ 'backgroundImage': `url(${Circles})`, 'backgroundSize': 'cover' }}>
                        <FiSettings className='card-icon' />
                        <h4 className='card-heading'>SETTINGS</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCards;
