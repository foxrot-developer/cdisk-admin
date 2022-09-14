import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImBlocked } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';

import { getAllReports, reportVideoAction } from '../store/StoreIndex';

const AllReports = () => {

    const dispatch = useDispatch();

    const allReports = useSelector(state => state.admin.reports);

    const videoActionHandler = (actionType, videoId, reportId) => {
        const data = {
            actionType,
            videoId,
            reportId
        };

        dispatch(reportVideoAction(data));
    };

    useEffect(() => {
        dispatch(getAllReports());
    }, []);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <h2>ALL REPORTS</h2>
                    <div className='table-scroll'>
                        <table className="table table-hover table-striped mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">Thumbnail</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allReports && allReports.map((report, index) => {
                                    return <tr key={index}>
                                        <td><img src={report.videoThumbnail} alt='Thumbnail' className='img-fluid' loading='lazy' width={90} /></td>
                                        <td>{report.videoName}</td>
                                        <td>{report.category}</td>
                                        <td>
                                            {!report.blocked ? <ImBlocked className='action-icon-block' onClick={() => videoActionHandler('block', report.videoId, report.id)} /> : <TiTick className='action-icon-unblock' onClick={() => videoActionHandler('unblock', report.videoId, report.id)} />}
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

export default AllReports;
