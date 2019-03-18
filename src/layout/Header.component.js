import React, { Component, Fragment } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
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
        const {
            auth: {
                signin: { isAuthenticated, user }
            },
            onSignout
        } = this.props;

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
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Wellcome {user.name}!
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem tag={() => <Link to="/profile" className="dropdown-item">Edit profile</Link>}>
                            Edit Profile
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem tag="a" href="/signout" onClick={(e) => onSignout(e)}>
                            Logout
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
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