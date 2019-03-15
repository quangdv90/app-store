import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../layout/Layout';

const SecureRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => rest.isAuthenticated ? (
            <Layout>
                <Component {...props} />
            </Layout>
        ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )} />
    )
}

export default SecureRoute;