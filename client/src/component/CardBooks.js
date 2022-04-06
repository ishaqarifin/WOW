import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CardBooks({item}) {
    // console.log(item.bookFile);
    return (
        <Link to={"/detailbook/" + item.id} style={{ textDecoration: "none" }}>
        <Card style={{ width: "14rem", marginBottom: "15px" }}>
            <Card.Img variant="top" src={item.bookCover} />

            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.author}</Card.Text>
            </Card.Body>
        </Card>
        </Link>
    );
}
