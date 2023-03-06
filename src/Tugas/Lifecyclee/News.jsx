import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const News = ({ news }) => {
    return (
        <Col md={4} xs={6} className='mb-4'>
            <Card className="shadow">
                <Card.Img variant="top" src={news.urlToImage} />
                <Card.Body>
                    <Card.Title>{news.title}</Card.Title> <hr />
                    <Card.Subtitle className="text-muted">Tgl: {news.publishedAt}</Card.Subtitle> <hr />
                    <Card.Text>{news.description}</Card.Text>
                    <Button href={news.url} variant="primary">Detail</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default News;
