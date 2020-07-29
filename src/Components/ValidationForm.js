//How we can validate our form 
import React from 'react'
import { useFormik } from 'formik';


const initialValues = {
    name: '',
    email: '',
    channel: ''
}


const onSubmit = values => {
    console.log('Form data', values);
}


const validate = values => {
    //values.name values.email values.channel
    //errors.name errors.email errors.channel
    //errors.name = 'This field is required'
    let errors = {}

    if (!values.name) {
        errors.name = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }
    if (!values.email) {
        errors.email = 'Required'
    }
    if (!values.channel) {
        errors.channel = 'Required'
    }
    return errors
}


function ValidationForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    // console.log('Form values', formik.values);
    // console.log('Form erros', formik.errors);
    console.log('Visited Fields', formik.touched);//onblur jo values return krega wo touched ma ajaigi
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input
                        type='text'
                        id='channel'
                        name='channel'
                        onChange={formik.handleChange}
                        value={formik.values.channel}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ValidationForm