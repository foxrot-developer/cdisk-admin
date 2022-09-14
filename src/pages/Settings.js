import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import SidebarNav from '../components/SidebarNav';
import VideoCpm from '../components/VideoCpm';
import MinWithdrawal from '../components/MinWithdrawal';
import { updateProfile } from '../store/StoreIndex';
import Toast from '../shared/Toast';

const Settings = () => {

    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);

    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const updateProfileHandler = type => {
        if (type === 'email') {
            if (newEmail) {
                const data = {
                    type: 'email',
                    email: newEmail
                };
                dispatch(updateProfile(data, setShowModal));
            } else {
                Toast.error('Email cannot be empty');
            }
        }
        else if (type === 'password') {
            if (newPassword) {
                const data = {
                    type: 'password',
                    password: newPassword
                };
                dispatch(updateProfile(data, setShowModal));
            } else {
                Toast.error('Password cannot be empty');
            }
        }
    };

    return (
        <div className='row w-100'>
            <div className='col-12'>
                <SidebarNav />
                <div className='menu-content grey pt-5'>
                    <button className='btn btn-primary my-3' onClick={handleShow}>UPDATE ADMIN DETAILS</button>
                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='d-flex'>
                                <input type="email" required className="form-control me-1" placeholder='Enter new email' onChange={e => setNewEmail(e.target.value)} />
                                <button className='btn btn-success' onClick={() => updateProfileHandler('email')}>Save</button>
                            </div>
                            <div className='d-flex mt-3'>
                                <input type="password" required className="form-control me-1" placeholder='Enter new password' onChange={e => setNewPassword(e.target.value)} />
                                <button className='btn btn-success' onClick={() => updateProfileHandler('password')}>Save</button>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <VideoCpm />
                    <MinWithdrawal />
                </div>
            </div>
        </div>
    )
}

export default Settings;
