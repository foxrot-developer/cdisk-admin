import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Contacts from '../pages/Contacts';
import Videos from '../pages/Videos';
import Reports from '../pages/Reports';
import AdminLogin from '../pages/AdminLogin';
import Settings from '../pages/Settings';
import Withdrawals from '../pages/Withdrawals';

const NavigationRoutes = () => {

    const adminData = useSelector(state => state.admin.admin);
    const adminLogin = useSelector(state => state.admin.isLogin);

    let routes;

    if (adminData && adminLogin) {
        routes = <Routes>
            {/** Dashboard routes **/}
            <Route exact path='/' element={<Dashboard />}></Route>
            <Route exact path='/admin/users' element={<Users />}></Route>
            <Route exact path='/admin/contacts' element={<Contacts />}></Route>
            <Route exact path='/admin/videos' element={<Videos />}></Route>
            <Route exact path='/admin/reports' element={<Reports />}></Route>
            <Route exact path='/admin/settings' element={<Settings />}></Route>
            <Route exact path='/admin/withdrawals' element={<Withdrawals />}></Route>
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    } else {
        routes = <Routes>
            {/** Dashboard routes **/}
            <Route exact path='/admin/login' element={<AdminLogin />}></Route>
            <Route
                path="*"
                element={<Navigate to="/admin/login" />}
            />
        </Routes>
    }
    return routes;
}

export default NavigationRoutes;
