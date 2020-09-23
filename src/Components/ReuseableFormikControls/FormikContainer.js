import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';


function FormikContainer() {
    const dropdownOptions = [
        { key: 'Select an option ', value: '' },
        { key: 'option1 ', value: 'Maths' },
        { key: 'option2 ', value: 'Physics' },
        { key: 'option3 ', value: 'Chemistry' }
    ];

    const radioOptions = [
        { key: 'option1 ', value: 'Maths' },
        { key: 'option2 ', value: 'Physics' },
        { key: 'option3 ', value: 'Chemistry' }
    ];

    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: ''
    };

    const validatonSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required')
    });

    const onSubmit = values => console.log('Form data', values);
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validatonSchema}
            onSubmit={onSubmit}
        >
            {
                formik =>
                    <Form>
                        <FormikControl
                            control='input'
                            type='email' l
                            abel='Email'
                            name='email'
                        />
                        <FormikControl
                            control='textarea'
                            label='Description'
                            name='description'
                        />
                        <FormikControl
                            control='select'
                            label='Select a Subject'
                            name='selectOption'
                            options={dropdownOptions} />
                        <FormikControl
                            control='radio'
                            label='Radio Subject'
                            name='radioOption'
                            options={radioOptions} />
                        <button type='submit'>Submit</button>
                    </Form>
            }
        </Formik>
    )
}

export default FormikContainer
