import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toast from '../shared/Toast';

import { adminSettings, editSettings } from '../store/StoreIndex';

const VideoCpm = () => {

    const dispatch = useDispatch();

    const [cpmEditable, setCpmEditable] = useState(false);
    const [cpmValue, setCpmValue] = useState(0);

    const allSettings = useSelector(state => state.admin.settings);

    const editSettingHandler = () => {
        if (cpmValue > 0) {
            const data = {
                type: 'videoCost',
                videoCost: +cpmValue
            };
            dispatch(editSettings(data, setCpmEditable));
        }
        else {
            Toast.error('Value should be greater than 0');
        }
    };

    useEffect(() => {
        dispatch(adminSettings());
    }, []);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <h2>CPM</h2>
                    <div className='table-scroll'>
                        <table className="table table-hover table-striped mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">CPM</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!cpmEditable ? allSettings && <tr>
                                    <td>{allSettings.videoCost}</td>
                                    <td><button className='btn btn-danger' onClick={() => setCpmEditable(true)}>Edit</button></td>
                                </tr> : <tr>
                                    <td><input type="number" className="form-control" placeholder='Enter cpm value' onChange={e => setCpmValue(e.target.value)} /></td>
                                    <td>
                                        <button className='btn btn-success m-1' onClick={editSettingHandler}>Save</button>
                                        <button className='btn btn-secondary m-1' onClick={() => setCpmEditable(false)}>Cancel</button>
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

export default VideoCpm;
