import React from 'react'
import CheckBox from './CheckBox';
import DatePicker from './DatePicker';
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
            return <CheckBox {...rest} />
        case 'date':
            return <DatePicker  {...rest} />
        default: return null
    }
}

export default FormikControl;