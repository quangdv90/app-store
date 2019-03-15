import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <Fragment>
        <Header />
        <main style={{minHeight: 'calc(100vh - 112px)'}}>
            {children}
        </main>
        <Footer />
    </Fragment>
)

export default Layout;