import * as actionTypes from '../actions/ActionTypes';

const initialState = {
    admin: {},
    isLogin: false,
    users: [],
    videos: [],
    contacts: [],
    reports: [],
    withdrawals: [],
    settings: {},
};

const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        case actionTypes.ALL_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            }
        case actionTypes.DELETE_CONTACT:
            const allContacts = [...state.contacts];
            const updatedContacts = allContacts.filter(contact => contact.id !== action.id);
            return {
                ...state,
                contacts: updatedContacts
            }
        case actionTypes.USER_ACTION:
            const allUsers = [...state.users];
            if (action.data.actionType === 'block') {
                const updatedUser = allUsers.find(user => user.id === action.data.userId);
                updatedUser.blocked = true;

            }
            else if (action.data.actionType === 'unblock') {
                const updatedUser = allUsers.find(user => user.id === action.data.userId);
                updatedUser.blocked = false;
            }
            return {
                ...state,
                users: allUsers
            }
        case actionTypes.ALL_VIDEOS:
            return {
                ...state,
                videos: action.payload
            }
        case actionTypes.ALL_REPORTS:
            return {
                ...state,
                reports: action.payload
            }
        case actionTypes.ADMIN_LOGIN:
            return {
                ...state,
                admin: action.payload,
                isLogin: true
            }
        case actionTypes.ADMIN_SETTINGS:
            return {
                ...state,
                settings: action.payload
            }
        case actionTypes.ADMIN_LOGOUT:
            return {
                admin: {},
                isLogin: false,
                users: [],
                videos: [],
                contacts: [],
                reports: [],
                withdrawals: [],
                settings: {}
            }
        case actionTypes.ALL_WITHDRAWAL:
            return {
                ...state,
                withdrawals: action.payload
            }
        default:
            return state;
    }
}

export default AdminReducer;
