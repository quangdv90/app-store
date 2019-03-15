import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Form,
    Button,
    UncontrolledAlert
} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import isEmpty from 'lodash/isEmpty';
import LoginInput from './LoginInput.component';

const Login = (props) => {
    const {
        signin: {
            loading,
            isAuthenticated,
            error
        },
        handleSubmit,
        onSignIn } = props;

    const { from } = props.location.state || { from: { pathname: "/" } };

    if (isAuthenticated) return <Redirect to={from} />

    return (
        <section className="signin py-3">
            <Container>
                <Row>
                    <Col md="6" className="mx-auto my-5">
                        <Card className="shadow">
                            <CardBody>
                                <h1 className="display-5 text-center">Sign In</h1>
                                <p className="lead text-center">Sign in to your account</p>

                                {!isEmpty(error) ? (
                                    <UncontrolledAlert color="danger">
                                        {error}
                                    </UncontrolledAlert>
                                ) : null}

                                <Form onSubmit={handleSubmit(onSignIn)} noValidate className="form-signin" autoComplete="off">
                                    <Field
                                        type="email"
                                        name="email"
                                        bsSize="lg"
                                        placeholder="Email"
                                        disabled={loading}
                                        component={LoginInput} />

                                    <Field
                                        type="password"
                                        name="password"
                                        bsSize="lg"
                                        placeholder="Password"
                                        disabled={loading}
                                        component={LoginInput} />

                                    <Button type="submit" color="info" disabled={loading} block>{loading ? 'Signing In...' : 'Sign In'}</Button>
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