import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Nav, Navbar, Row, } from 'react-bootstrap';
import News from './Tugas/Lifecyclee/News';
import '../src/Tugas/Lifecyclee/Nvbar'

function Hooks() {

    const [newss, setNewss] = useState()
    const [cari, setCari] = useState()
    const [dataCari, setDataCari] = useState()

    useEffect(() => {
        retNews();
    }, [])

    const retNews = async () => {
        try {

            const res = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=2d3ee13f918c4f9692f8caa5c0b07487')

            console.log(res.data.articles, '<== respon res')
            setNewss(res.data.articles)

        } catch (error) {
            alert(error, '<== respon error res')
        }
    }

    const hanChange = (e) => {
        // console.log(e.target.value)
        setCari(e.target.value)
    }

    const hanSubmite = async (e) => {
        try {
            e.preventDefault()
            const resp = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=2d3ee13f918c4f9692f8caa5c0b07487&q=${cari}`)
            console.log(resp.data.articles)
            setDataCari(resp.data.articles)

        } catch (error) {
            alert(error, '<== error SUBMITE')
        }
    }

    return (
        <div className='main'>
            <div className='App'>
                <div>
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <img src="https://eduwork.id/images/logo3.png" alt="lgo" className="lg"></img>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Rizqi</Nav.Link>
                                <Nav.Link href="#features"><b>News</b></Nav.Link>
                            </Nav>
                            <Form className="d-flex" onSubmit={hanSubmite}>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={hanChange}
                                />
                            </Form>
                        </Container>
                    </Navbar>
                </div>
                <Row>
                    {dataCari && dataCari.map((news, index) => {
                        return (
                            <News
                                key={index}
                                news={news}
                            />
                        )
                    })}
                </Row>
                <br />
                <br />
                <br />
                <Row>
                    {newss && newss.map((news, index) => (
                        <News
                            key={index}
                            news={news}
                        />
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Hooks;