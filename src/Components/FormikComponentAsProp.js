//How we reduce our boilerplate code
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const initialValues = {
    name: '',
    email: '',
    channel: ''
}


const onSubmit = values => {
    console.log('Form data', values);
}


const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format!').required('Required!'),
    channel: Yup.string().required('Required!')
})


function FormikComponentAsProp() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Enter Full Name'
                    />
                    <ErrorMessage name='name' />
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Enter Valid Email Address'
                    />
                    <ErrorMessage name='email' />
                </div>
                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field
                        type='text'
                        id='channel'
                        name='channel'
                        placeholder='Enter YouTube Channel Name'
                    />
                    <ErrorMessage name='channel' />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </Form>
        </Formik>
    )
}
export default FormikComponentAsProp