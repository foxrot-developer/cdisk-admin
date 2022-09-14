import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TextField from '../shared/TextField';
import { adminLogin } from '../store/StoreIndex';
import '../assets/css/login.css';

const LoginForm = () => {

    const dispatch = useDispatch();
    const history = useNavigate();

    const validValues = {
        email: '',
        password: ''
    };

    const errorSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const loginHandler = (data) => {
        dispatch(adminLogin(data, history));
    }

    return (
        <div className='area'>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className='container main-container pt-5'>
                <div className='row login-main'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-xs-12 col-md-6 design-sec'>
                                <h1 className='top-context'>ADMIN LOGIN</h1>
                            </div>
                            <div className='col-xs-12 col-md-6 login-form-section'>
                                <div className='text-start'>
                                    <Formik
                                        initialValues={validValues}
                                        validationSchema={errorSchema}
                                        onSubmit={loginHandler}
                                    >
                                        {(formik) => (
                                            <React.Fragment>
                                                <Form>
                                                    <TextField label='Email' name='email' type='email' specialclass='special-field' />
                                                    <TextField label='Password' name='password' type='password' specialclass='special-field' />
                                                    <button className='btn btn-primary' type='submit'>
                                                        Login
                                                    </button>
                                                </Form>
                                            </React.Fragment>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default LoginForm;
