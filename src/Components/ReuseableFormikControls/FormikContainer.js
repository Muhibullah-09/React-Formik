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
        { key: 'option1 ', value: 'rMaths' },
        { key: 'option2 ', value: 'rPhysics' },
        { key: 'option3 ', value: 'rChemistry' }
    ];

    const checkboxOptions = [
        { key: 'option1 ', value: 'cMaths' },
        { key: 'option2 ', value: 'cPhysics' },
        { key: 'option3 ', value: 'cChemistry' }
    ];

    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: []
    };

    const validatonSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().required('Required')
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
                            type='email'
                            label='Email'
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
                            label='Radio Option'
                            name='radioOption'
                            options={radioOptions} />
                        <FormikControl
                            control='checkbox'
                            label='Checkbox topics'
                            name='checkboxOption'
                            options={checkboxOptions}
                        />
                        <button type='submit'>Submit</button>
                    </Form>
            }
        </Formik>
    )
}

export default FormikContainer
