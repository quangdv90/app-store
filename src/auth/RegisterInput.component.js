import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

const RegisterInput = ({
    input,
    label,
    type,
    bsSize,
    disabled,
    placeholder,
    meta: { touched, error }
}) => (
        <FormGroup>
            {label && <Label>{label}</Label>}
            <Input
                {...input}
                bsSize={bsSize}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                invalid={touched && error ? true : false}
            />
            {touched && error && <FormFeedback>{error}</FormFeedback>}
        </FormGroup>
    )

export default RegisterInput;