import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../layout/Layout';

const DefaultRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(matchProps) => (
            <Layout>
                <Component {...matchProps} />
            </Layout>
        )} />
    )
}

export default DefaultRoute;