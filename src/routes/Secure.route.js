import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../layout/Layout';

const SecureRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => rest.isAuthenticated ? (
            <Layout>
                <Component {...matchProps} />
            </Layout>
        ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: matchProps.location }
                }} />
            )} />
    )
}

export default SecureRoute;