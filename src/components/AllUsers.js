import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImBlocked } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';

import '../assets/css/all-users.css';
import { getAllUsers, userAction } from '../store/StoreIndex';

const AllUsers = () => {

    const dispatch = useDispatch();

    const allUsers = useSelector(state => state.admin.users);

    const userActionHandler = (actionType, userId) => {
        const data = {
            actionType,
            userId
        };

        dispatch(userAction(data));
    };

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <h2>ALL USERS</h2>
                    <div className='table-scroll'>
                        <table className="table table-hover table-striped mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">Email</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Referral</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allUsers && allUsers.map((user, index) => {
                                    return <tr key={index}>
                                        <td>{user.email}</td>
                                        <td>{user.username}</td>
                                        <td>{user.referral}</td>
                                        <td>
                                            {!user.blocked ? <ImBlocked className='action-icon-block' onClick={() => userActionHandler('block', user.id)} /> : <TiTick className='action-icon-unblock' onClick={() => userActionHandler('unblock', user.id)} />}
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllUsers;
