import React, { Component, Fragment } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }));
    }

    componentDidMount() {
        console.log(this.props.auth);
    }

    componentDidUpdate() {
        console.log(this.props.auth);
    }

    render() {
        const {
            signin: { isAuthenticated }
        } = this.props.auth;

        let _AuthNavContent = (
            <Fragment>
                <NavItem>
                    <Link className="nav-link" to="/register">Register</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/login">Login</Link>
                </NavItem>
            </Fragment>
        )

        if (isAuthenticated) {
            _AuthNavContent = (
                <NavItem>
                    <Link className="nav-link" to="/logout">Logout</Link>
                </NavItem>
            )
        }

        return (
            <Navbar color="dark" dark expand="md">
                <Link className="navbar-brand" to="/">ReactApp</Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/product">Product</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/secure">Secure</Link>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem>
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </NavItem>
                        {_AuthNavContent}
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default Header;