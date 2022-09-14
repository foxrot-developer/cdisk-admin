import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { allWithdrawals, withdrawalAction } from '../store/StoreIndex';
import '../assets/css/all-withdrawals.css';

const AllWithdrawals = () => {

    const dispatch = useDispatch();

    const withdrawals = useSelector(state => state.admin.withdrawals);

    const paytmWithdrawals = withdrawals.filter(withdrawal => withdrawal.paymentType === 'Paytm');

    const cardWithdrawals = withdrawals.filter(withdrawal => withdrawal.paymentType === 'Card');

    useEffect(() => {
        dispatch((allWithdrawals()));
    }, []);

    const withdrawalActionHandler = (id, approved, userId) => {
        const data = {
            approved: approved,
            userId: userId
        };

        dispatch(withdrawalAction(data, id))
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <h2>CARD WITHDRAWALS</h2>
                    <div className='table-scroll'>
                        <table className="table table-hover table-striped mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">Username</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">date</th>
                                    <th scope="col">Payment Mode</th>
                                    <th scope="col">Account Holder</th>
                                    <th scope="col">Card Number</th>
                                    <th scope="col">Bank</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cardWithdrawals && cardWithdrawals.map((paytm, index) => {
                                    return <tr key={index}>
                                        <td>{paytm.username}</td>
                                        <td>{`$${paytm.amount}`}</td>
                                        <td>{paytm.date}</td>
                                        <td>{paytm.paymentType}</td>
                                        <td>{JSON.parse(paytm.paymentDetails).accountHolder}</td>
                                        <td>{JSON.parse(paytm.paymentDetails).cardNumber}</td>
                                        <td>{JSON.parse(paytm.paymentDetails).bank}</td>
                                        <td>{JSON.parse(paytm.paymentDetails).phone}</td>
                                        {paytm.pending ? <td>
                                            <button className='btn btn-success me-1 my-1' onClick={() => withdrawalActionHandler(paytm.id, true, paytm.userId)}>Approve</button>
                                            <button className='btn btn-danger' onClick={() => withdrawalActionHandler(paytm.id, false, paytm.userId)}>Reject</button>
                                        </td> : !paytm.pending && paytm.approved ? <td><span className='approved'>Approved</span></td> : <td><span className='rejected'>Rejected</span></td>}
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className='row mt-5'>
                <div className='col-12'>
                    <h2>PAYTM WITHDRAWALS</h2>
                    <div className='table-scroll'>
                        <table className="table table-hover table-striped mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">Username</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">date</th>
                                    <th scope="col">Payment Mode</th>
                                    <th scope="col">Account Holder</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Status/Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paytmWithdrawals && paytmWithdrawals.map((paytm, index) => {
                                    return <tr key={index}>
                                        <td>{paytm.username}</td>
                                        <td>{`$${paytm.amount}`}</td>
                                        <td>{paytm.date}</td>
                                        <td>{paytm.paymentType}</td>
                                        <td>{JSON.parse(paytm.paymentDetails).accountHolder}</td>
                                        <td>{JSON.parse(paytm.paymentDetails).phone}</td>
                                        {paytm.pending ? <td>
                                            <button className='btn btn-success me-1 my-1' onClick={() => withdrawalActionHandler(paytm.id, true, paytm.userId)}>Approve</button>
                                            <button className='btn btn-danger' onClick={() => withdrawalActionHandler(paytm.id, false, paytm.userId)}>Reject</button>
                                        </td> : !paytm.pending && paytm.approved ? <td><span className='approved'>Approved</span></td> : <td><span className='rejected'>Rejected</span></td>}
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

export default AllWithdrawals;
