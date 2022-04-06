import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Menu from '../component/Menu'
import { useQuery } from 'react-query'
import { API } from '../config/api'

export default function DetailBook() {
    let api = API();

    // // Create process for fetching bukus data from database with useQuery here ...
    let { data: bukus, refetch } = useQuery("bukusCache", async () => {
        const config = {
            method: "GET",
            headers: {
                Authorization: "Basic " + localStorage.token,
            },

        };
        const response = await api.get("/detailbukus/27");
        console.log(response);
        return response.data;
        console.log(response.data);
    });

  return (
    <Container fluid>
            <Row>
                <Menu />
                <Col xs={9} className="">
                    <br />
                    <br />
                    <Row>
                        <Col md={3} class="mt-5">
                            <Link to={"/readbook"}>
                            <Card style={{ width: '14rem', marginBottom:"15px", justifyContent:"center", alignItems:"center", marginTop:"10px" }}>
                                    <Card.Img variant="top" src='assets/book2.png' />
                            </Card>
                            </Link>
                        </Col>
                        <Col md={7} class="mt-5">
                            <div class="d-flex flex-column justify-content-center mt-3 ms5" >
                                <h3><b>title</b></h3>
                                <h6>?</h6>
                                <br/>
                                <h5><b>Publication Date</b></h5>
                                <h6>1 januari 2020</h6>
                                <br/>
                                <h5><b>Pages</b></h5>
                                <h6>08534763215</h6>
                                <br/>
                                <h5><b>ISN</b></h5>
                                <h6>672468234</h6>
                            </div>
                        </Col>
                    </Row>
                    
                    <br />
                    <h2>About This Book</h2>
                    <br />
                    <p>In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can’t make a scene at your sister’s wedding and break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone and pretending to be a boy.

Where Tess is headed is a mystery, even to her. So when she runs into an old friend, it’s a stroke of luck. This friend is a quigutl—a subspecies of dragon—who gives her both a purpose and protection on the road. But Tess is guarding a troubling secret. Her tumultuous past is a heavy burden to carry, and the memories she’s tried to forget threaten to expose her to the world in more ways than one.

Returning to the fascinating world she created in the award-winning and New York Times bestselling Seraphina, Rachel Hartman introduces readers to a new character and a new quest, pushing the boundaries of genre once again in this wholly original fantasy.</p>
                </Col>
            </Row>
        </Container>
  )
}
