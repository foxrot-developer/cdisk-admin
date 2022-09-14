import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImBlocked } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';

import { getAllVideos, videoAction } from '../store/StoreIndex';

const AllVideos = () => {

    const dispatch = useDispatch();

    const allVideos = useSelector(state => state.admin.videos);

    const videoActionHandler = (actionType, videoId) => {
        const data = {
            actionType,
            videoId
        };

        dispatch(videoAction(data));
    };

    useEffect(() => {
        dispatch(getAllVideos());
    }, []);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <h2>ALL VIDEOS</h2>
                    <div className='table-scroll'>
                        <table className="table table-hover table-striped mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">Thumbnail</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Views</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allVideos && allVideos.map((video, index) => {
                                    return <tr key={index}>
                                        <td><img src={`https://c-disk.herokuapp.com/${video.thumbnail}`} alt='Thumbnail' className='img-fluid' loading='lazy' width={90} /></td>
                                        <td>{video.user}</td>
                                        <td>{video.videoName}</td>
                                        <td>{video.date}</td>
                                        <td>{video.clicks}</td>
                                        <td>
                                            {!video.blocked ? <ImBlocked className='action-icon-block' onClick={() => videoActionHandler('block', video.id)} /> : <TiTick className='action-icon-unblock' onClick={() => videoActionHandler('unblock', video.id)} />}
                                            <a href={`https://c-disk.herokuapp.com/${video.videoLink}`} target='_blank' rel='noreferrer' className='btn btn-primary ms-1'>Play Video</a>
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

export default AllVideos;
