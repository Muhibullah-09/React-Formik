//Hiw we can hold data on user click
import React from 'react'
import { useFormik } from 'formik';
function HoldData() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        }
    })
    return (
        <div>

        </div>
    )
}

export default HoldData
