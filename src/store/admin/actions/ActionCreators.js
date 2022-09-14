import * as actionTypes from './ActionTypes';
import Axios from '../../../axios/Axios';
import Toast from '../../../shared/Toast';

export const getAllUsers = () => dispatch => {
    Axios.get('admin/all-users')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_USERS,
                payload: response.data.users
            });
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.response.data.message);
        });
};

export const userAction = data => dispatch => {
    Axios.post('admin/user-action', data)
        .then(response => {
            dispatch({
                type: actionTypes.USER_ACTION,
                data: data
            });
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.response.data.message);
        });
};

export const getAllContacts = () => dispatch => {
    Axios.get('admin/all-contacts')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_CONTACTS,
                payload: response.data.contacts
            });
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.response.data.message);
        });
};

export const deleteContact = id => dispatch => {
    Axios.delete(`/admin/delete-contact/${id}`)
        .then(response => {
            dispatch({
                type: actionTypes.DELETE_CONTACT,
                id: id
            });
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.response.data.message);
        });
};

export const getAllVideos = () => dispatch => {
    Axios.get('admin/all-videos')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_VIDEOS,
                payload: response.data.videos
            });
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.response.data.message);
        });
};

export const videoAction = data => dispatch => {
    Axios.post('admin/video-action', data)
        .then(response => {
            dispatch(getAllVideos());
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.response.data.message);
        });
};

export const getAllReports = () => dispatch => {
    Axios.get('admin/all-reports')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_REPORTS,
                payload: response.data.reports
            });
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.response.data.message);
        });
};

export const reportVideoAction = data => dispatch => {
    Axios.post('admin/report-video-action', data)
        .then(response => {
            dispatch(getAllReports());
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.response.data.message);
        });
};

export const adminLogin = (data, history) => dispatch => {
    Axios.post('admin/admin-login', data)
        .then(response => {
            dispatch({
                type: actionTypes.ADMIN_LOGIN,
                payload: response.data.adminEmail
            });
            history('/');
            Toast.success('Admin login successful');
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.response.data.message);
        });
};

export const adminLogout = (history) => dispatch => {
    dispatch({
        type: actionTypes.ADMIN_LOGOUT,
    });
    history('/admin/login');
    Toast.success('Admin logout successful');
};

export const adminSettings = () => dispatch => {
    Axios.get('admin/all-settings')
        .then(response => {
            dispatch({
                type: actionTypes.ADMIN_SETTINGS,
                payload: response.data
            });
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.response.data.message);
        });
};

export const editSettings = (data, setCpmEditable) => dispatch => {
    Axios.patch('admin/set-settings', data)
        .then(response => {
            dispatch(adminSettings());
            setCpmEditable(false);
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.response.data.message);
        });
};

export const updateProfile = (data, setShowModal) => dispatch => {
    Axios.patch('admin/update-profile', data)
        .then(response => {
            if (data.type === 'email') {
                dispatch({
                    type: actionTypes.ADMIN_UPDATE,
                    payload: data.email
                });
            }
            setShowModal(false);
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.response.data.message);
        });
};

export const allWithdrawals = () => dispatch => {
    Axios.get('admin/all-withdrawals')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_WITHDRAWAL,
                payload: response.data.allWithdrawalRequests
            });
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.response.data.message);
        });
};

export const withdrawalAction = (data, id) => dispatch => {
    Axios.patch(`admin/update-withdraw-request/${id}`, data)
        .then(response => {
            dispatch(allWithdrawals());
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.response.data.message);
        });
};