import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Form,
    Button
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import LoginInput from './LoginInput.component';

const Login = (props) => {
    const { handleSubmit, onSignIn, submitting } = props;

    return (
        <section className="signin py-3">
            <Container>
                <Row>
                    <Col md="6" className="mx-auto my-5">
                        <Card>
                            <CardBody>
                                <h1 className="display-5 text-center">Sign In</h1>
                                <p className="lead text-center">Sign in to your account</p>

                                <Form noValidate onSubmit={handleSubmit(onSignIn)} className="form-signin" autoComplete="off">
                                    <Field
                                        type="email"
                                        name="email"
                                        bsSize="lg"
                                        placeholder="Email"
                                        disabled={submitting}
                                        component={LoginInput} />

                                    <Field
                                        type="password"
                                        name="password"
                                        bsSize="lg"
                                        placeholder="Password"
                                        disabled={submitting}
                                        component={LoginInput} />

                                    <Button type="submit" color="info" disabled={submitting} block>{submitting ? 'Signing In...' : 'Sign In'}</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

const validate = values => {
    const errors = {};

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
    form: 'SignInForm',
    validate
})(Login);