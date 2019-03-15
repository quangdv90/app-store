import React from 'react';
import { Container } from 'reactstrap';
import './Footer.component.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <span className="text-muted">Copyright &copy; 2017 - 2019</span>
            </Container>
        </footer>
    )
}

export default Footer;