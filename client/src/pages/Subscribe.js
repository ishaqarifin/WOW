import React from 'react'
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from '../component/Menu';

export default function Subscribe() {
  return (
    <Container fluid>
            <Row>
                <Menu />
                <Col xs={9} className="">
                    <div class="mt-5 d-flex justify-content-center align-item-center">
                        <h3>Premium</h3>
                        <br/>
                    </div>
                    <div class="mt-5 d-flex justify-content-center align-item-center">
                        <div><p>Pay now and access all the latest books from <img src="assets/sicon.png" alt="" /> </p></div>
                    </div>
                    <div class=" d-flex justify-content-center align-item-center">
                            <span>
                            <img src="assets/sicon.png" alt=""/><p> : 088672343253 </p>
                            </span>
                    </div>
                    <div class=" d-flex justify-content-center align-item-center">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Control type="text" placeholder="Input your account number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Attach proof of transfer" />
                        </Form.Group>

                        <Button variant="danger" type="submit">
                            Kirim
                        </Button>
                    </Form>
                    </div>
                </Col>
            </Row>
        </Container>
  )
}
