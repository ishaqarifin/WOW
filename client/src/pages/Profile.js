import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Card, Container, Button } from "react-bootstrap";
import Menu from '../component/Menu';
import ListData from '../component/Data/List'
import { API } from '../config/api';
import { useQuery } from 'react-query';

export default function Profile() {
    let api = API()

    let { data: profiles, refetch } = useQuery("profilesCache", async () => {
        const config = {
            method: "GET",
            headers: {
                Authorization: "Basic " + localStorage.token,
            },

        };
        const response = await api.get("/profiles", config);
        console.log(response);
        return response.data;
    });
    console.log(profiles);

  return (
    <Container fluid>
            <Row>
                <Menu />
                <Col xs={9} className="">
                    <br />
                    <h2>Profile</h2>
                    <br />
                    <Row style={{ backgroundColor: "pink", marginRight:"50px" }}>
                        <Col md={7} class="mt-5">
                            <div class="d-flex flex-column justify-content-center mt-3" >
                                <h5>Email</h5>
                                <h6>{profiles?.gender}</h6>
                                <br/>
                                <h5>jenis kelamin</h5>
                                <h6>Laki-laki</h6>
                                {/* <h6>{profiles[0].gender}</h6> */}
                                <br/>
                                <h5>phone</h5>
                                <h6>08534763215</h6>
                                <br/>
                                <h5>alamat</h5>
                                <h6>Indonesia</h6>
                            </div>
                        </Col>
                        <Col md={3} class="mt-5">
                            <Card style={{ width: '14rem', marginBottom:"15px", justifyContent:"center", alignItems:"center", backgroundColor: "pink", marginTop:"10px" }}>
                                    <Card.Img variant="top" src='assets/my-image.jpg' />
                                    <Card.Body>
                                        <Card.Title><Button variant="danger">admin</Button></Card.Title>
                                    </Card.Body>
                                </Card>
                        </Col>
                    </Row>
                    
                    <br />
                    <h2>My List Book</h2>
                    <br />
                    <Row xs={1} md={4} className="g-4">
                        {ListData.map((data, index)=> (
                            <Col md={3}>
                                <Card style={{ width: '14rem', marginBottom:"15px" }}>
                                    <Link to="/detailbook"> <Card.Img variant="top" src={data.image} /></Link>
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>
                                        {data.author}
                                        </Card.Text>
                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
  )
}
