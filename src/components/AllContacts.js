import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllContacts, deleteContact } from '../store/StoreIndex';

const AllContacts = () => {

    const dispatch = useDispatch();

    const allContacts = useSelector(state => state.admin.contacts);

    useEffect(() => {
        dispatch(getAllContacts());
    }, []);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <h2>CONTACT REQUESTS</h2>
                    <div className='table-scroll'>
                        <table className="table table-hover table-striped mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allContacts && allContacts.map((contact, index) => {
                                    return <tr key={index}>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.message}</td>
                                        <td><button className='btn btn-danger' onClick={() => dispatch(deleteContact(contact.id))}>Delete</button></td>
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

export default AllContacts;
