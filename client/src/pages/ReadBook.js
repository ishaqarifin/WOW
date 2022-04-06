import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Menu from "../component/Menu";
// import {MobilePDFReader} from 'react-read-pdf'

export default function ReadBook() {
    // const [location, setLocation] = useState(null);
    // const locationChange = (epubcifi) => {
    //     setLocation(epubcifi);
    // };
    return (
        <Container fluid>
            <Row>
                <Menu />
                <Col xs={9} className="">
                    <br />
                    <br />
                    <Row>
                        
                        <Col md={7} class="mt-5">
                        {/* <div style={{overflow:'scroll',height:600}}>
            <MobilePDFReader url="http://localhost:5001/uploads/1648441476527-3000_most_common_words.pdf"/>
           </div> */}
                            {/* <div style={{ height: "100vh" }}>
                                <ReactReader location={location} 
                                locationChanged={locationChanged} 
                                url="https://gerhardsletten.github.io/react-reader/files/alice.epub" />
                            </div> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
