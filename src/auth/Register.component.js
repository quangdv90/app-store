import React from 'react';
import { Button, Form, UncontrolledAlert, Container, Row, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import RegisterInput from './RegisterInput.component';

const Register = (props) => {
    const {
        register: {
            loading,
            errors,
            messages
        },
        handleSubmit,
        onRegisterUser } = props;

    return (
        <section className="register py-3">
            <Container>
                <Row>
                    <Col md="8" className="mx-auto my-5">
                        <h1 className="display-4 text-center">Sign Up</h1>
                        <p className="lead text-center">Create your account</p>

                        {!isEmpty(messages) ? (
                            <UncontrolledAlert color="success">
                                {`${messages}. Go to `}
                                <Link to="/login">Login</Link>
                            </UncontrolledAlert>
                        ) : null}

                        {!isEmpty(errors) ? (
                            <UncontrolledAlert color="danger">
                                {errors}
                            </UncontrolledAlert>
                        ) : null}

                        <Form noValidate onSubmit={handleSubmit(onRegisterUser)} autoComplete="off">
                            <Field
                                label="Full name *"
                                type="text"
                                name="name"
                                bsSize="lg"
                                placeholder="Eg. john doe"
                                disabled={loading}
                                component={RegisterInput} />

                            <Field
                                label="Email *"
                                type="email"
                                name="email"
                                bsSize="lg"
                                placeholder="Eg. johndoe@gmail.com"
                                disabled={loading}
                                component={RegisterInput} />

                            <Field
                                label="Password *"
                                type="password"
                                name="password"
                                bsSize="lg"
                                placeholder="Enter your password"
                                disabled={loading}
                                component={RegisterInput} />

                            <Button type="submit" color="info" disabled={loading} block>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = "Full name is required.";
    }

    if (!values.email) {
        errors.email = "Email is required."
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = "Password is required.";
    }

    return errors;
}

export default reduxForm({
    form: 'RegisterUserForm',
    validate
})(Register);