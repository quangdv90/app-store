import React, { Component } from 'react';
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

    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <Link className="navbar-brand" to="/">ReactApp</Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/register">Register</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/login">Login</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default Header;