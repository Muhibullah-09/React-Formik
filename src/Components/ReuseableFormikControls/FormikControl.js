import React from 'react'
import Input from './Input'
import RadioButtons from './RadioButtons'
import Select from './Select'
import TextArea from './TextArea'

function FormikControl(props) {
    const { control  , ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest}/>
        case 'textarea':
            return <TextArea {...rest}/>
        case 'select':
            return <Select  {...rest} />
        case 'radio':
            return <RadioButtons {...rest} />
        case 'checkbox':
        case 'date':
        default: return null
    }
}

export default FormikControl;