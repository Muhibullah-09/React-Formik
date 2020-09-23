import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
}


const onSubmit = values => {
    console.log('Form data', values);
}


const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format!').required('Required!'),
    channel: Yup.string().required('Required!'),
    comments: Yup.string().required('Required')
})


const validateComment = value => {
    let error
    if (!value) {
        error = 'Required'
    }
    return error
}


function DisableSubmitButton1() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    console.log('Formic Props' , formik);
                    return (
                        <Form>
                            <div className='form-control'>
                                <label htmlFor='name'>Name</label>
                                <Field type='text' id='name' name='name' placeholder='Enter Full Name' />
                                <ErrorMessage name='name' component={TextError} />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='email'>E-mail</label>
                                <Field type='email' id='email' name='email' placeholder='Enter Valid Email Address' />
                                <ErrorMessage name='email' component={TextError} />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='channel'>Channel</label>
                                <Field type='text' id='channel' name='channel' placeholder='Enter YouTube Channel Name' />
                                <ErrorMessage name='channel' component={TextError} />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='comments'>Comments</label>
                                <Field as='textarea' id='comments' name='comments' placeholder='Enter Your Comments' validate={validateComment} />
                                <ErrorMessage name='comments' component={TextError} />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='address'>Address</label>
                                <FastField name='address'>
                                    {
                                        (props) => {
                                            // console.log('Field Render');
                                            const { field, meta } = props
                                            return (
                                                <div>
                                                    <input type='text' id='address' {...field} />
                                                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                                </div>
                                            )
                                        }
                                    }
                                </FastField>
                            </div>
                            <div className='form-control'>
                                <label htmlFor='facebook'>Facebook profile</label>
                                <Field type='text' id='facebook' name='social.facebook' />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='twitter'>Twitter profile</label>
                                <Field type='text' id='twitter' name='social.twitter' />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='primaryPh'>Primary phone number</label>
                                <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='secondaryPh'>Secondary phone number</label>
                                <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
                            </div>
                            <div className='from-control'>
                                <label>List of phone numbers</label>
                                <FieldArray name='phNumbers'>
                                    {
                                        (fieldArrayProps) => {
                                            const { push, remove, form } = fieldArrayProps
                                            const { values } = form
                                            const { phNumbers } = values
                                            console.log('Form Errors', form.errors);
                                            return (
                                                <div>
                                                    {phNumbers.map((phNumber, index) => (
                                                        <div key={index}>
                                                            <Field name={`phNumbers[${index}]`} />
                                                            {
                                                                index > 0 && (
                                                                    <button type='button' onClick={() => remove(index)}>
                                                                        {' '} - {' '}
                                                                    </button>
                                                                )}
                                                            <button type='button' onClick={() => push('')}>
                                                                {' '} + {' '}
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )
                                        }
                                    }
                                </FieldArray>
                            </div>
                            <button type='submit' disabled={!formik.isValid}>Submit</button>
                        </Form>

                    )
                }
            }
        </Formik>
    )
}
export default DisableSubmitButton1;