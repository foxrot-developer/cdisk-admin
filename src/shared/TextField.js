import React from 'react';
import { ErrorMessage, useField } from 'formik';

import '../assets/css/text-field.css';

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    if (props.specialclass) {
        return (
            <div className="mb-3">
                {label && <label htmlFor={field.name} className={`form-label ${props.specialclass} fw-bold`}>{label}</label>}
                <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} />
                <ErrorMessage component='small' name={field.name} className='text-danger' />
            </div>
        )
    }
    else {
        return (
            <div className="mb-3">
                {label && <label htmlFor={field.name} className="form-label fw-bold">{label}</label>}
                <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} />
                <ErrorMessage component='small' name={field.name} className='text-danger' />
            </div>
        )
    }
}

export default TextField;
