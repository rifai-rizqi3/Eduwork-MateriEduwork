import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./style.css"

export default class Navbarr extends React.Component {

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Container>
                    <img src="https://eduwork.id/images/logo3.png" alt="lgo" className="lg"></img>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Bashofi</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}