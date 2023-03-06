import React from "react";
import { Container, Nav, Navbar, Form, Row,} from "react-bootstrap";
import "./style.css"
import { API_URL } from "../constants";
import News from "../News";
import axios from "axios";

export default class Nvbar extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            first: [],
        }
        console.log('DID CONSTRUCTOR')
    }

    componentDidUpdate() {
        console.log('DID UPDATE')
    }

    render() {
        const afterChange = (e) => {
            e.preventDefault()
            axios
            .get(API_URL + e.target.value )
            .then(res => {
                const first = res.data.articles;
                this.setState({ first });
            })
            .catch(error => {
                alert({error})
            })
        }
        const {first} = this.state
        return (
            <div>
            <Navbar bg="warning" variant="dark">
                <Container>
                    <img src="https://eduwork.id/images/logo3.png" alt="lgo" className="lg"></img>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Rizqi</Nav.Link>
                        <Nav.Link href="#features"><b>News</b></Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={afterChange}
                        />
                    </Form>
                </Container>
            </Navbar>
            <hr />
            <div>
                <Row>
                    {first && first.map((news) => (
                        <News 
                        key={news.id}
                        news={news}
                        />
                    ))}
                </Row>
            </div>
            </div>
        )
    }
}