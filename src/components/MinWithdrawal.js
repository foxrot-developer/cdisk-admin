import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toast from '../shared/Toast';

import { editSettings } from '../store/StoreIndex';

const MinWithdrawal = () => {

    const dispatch = useDispatch();

    const [withdrawalEditable, setWithdrawalEditable] = useState(false);
    const [withdrawalValue, setWithdrawalValue] = useState(0);

    const allSettings = useSelector(state => state.admin.settings);

    const editSettingHandler = () => {
        if (withdrawalValue > 0) {
            const data = {
                type: 'minWithdrawal',
                minWithdrawal: +withdrawalValue
            };
            dispatch(editSettings(data, setWithdrawalEditable));
        }
        else {
            Toast.error('Value should be greater than 0');
        }
    };

    return (
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-12'>
                    <h2>MIN WITHDRAWAL</h2>
                    <div className='table-scroll'>
                        <table className="table table-hover table-striped mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">MIN WITHDRAWAL</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!withdrawalEditable ? allSettings && <tr>
                                    <td>{allSettings.minWithdrawal}</td>
                                    <td><button className='btn btn-danger' onClick={() => setWithdrawalEditable(true)}>Edit</button></td>
                                </tr> : <tr>
                                    <td><input type="number" className="form-control" placeholder='Enter min withdrawal value' onChange={e => setWithdrawalValue(e.target.value)} /></td>
                                    <td>
                                        <button className='btn btn-success m-1' onClick={editSettingHandler}>Save</button>
                                        <button className='btn btn-secondary m-1' onClick={() => setWithdrawalEditable(false)}>Cancel</button>
                                    </td>
                                </tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MinWithdrawal;
