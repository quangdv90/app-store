import React, { Fragment } from 'react';
import Header from './Header.container';
import Footer from './Footer.component';

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