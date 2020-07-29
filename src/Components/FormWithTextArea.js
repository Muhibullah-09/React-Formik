//we will learn field render props pattren in this component
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';


const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: ''
}


const onSubmit = values => {
    console.log('Form data', values);
}


const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format!').required('Required!'),
    channel: Yup.string().required('Required!')
})


function FormWithTextArea() {
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
                    <ErrorMessage name='name' component={TextError} />
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Enter Valid Email Address'
                    />
                    <ErrorMessage name='email' component={TextError} />
                </div>
                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field
                        type='text'
                        id='channel'
                        name='channel'
                        placeholder='Enter YouTube Channel Name'
                    />
                    <ErrorMessage name='channel' component={TextError} />
                </div>
                <div className='form-control'>
                    <label htmlFor='comments'>Comments</label>
                    <Field
                        as='textarea'
                        id='comments'
                        name='comments'
                        placeholder='Enter Your Comments'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='address'>Address</label>
                    <Field name='address'>
                        {
                            (props) => {
                                console.log('Render Props', props);
                                const { field, form, meta } = props
                                return (
                                    <div>
                                        <input type='text' id='address' {...field} />
                                        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                    </div>
                                )
                            }
                        }
                    </Field>
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}
export default FormWithTextArea