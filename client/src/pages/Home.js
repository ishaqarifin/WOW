import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Menu from "../component/Menu";
// import Masonry from "react-masonry-css"
import { useQuery } from "react-query";
import { API } from "../config/api";
import CardBooks from "../component/CardBooks";
// import ListData from "../component/Data/List";

export default function Home() {
    let api = API();

    // // Create process for fetching bukus data from database with useQuery here ...
    let { data: bukus, refetch } = useQuery("bukusCache", async () => {
        const config = {
            method: "GET",
            headers: {
                Authorization: "Basic " + localStorage.token,
            },

        };
        const response = await api.get("/bukus", config);
        console.log(response);
        return response.data.bukus;
    });
    console.log(bukus);

    // const breakpointColumnsObj = {
    //     default: 6,
    //     1100: 4,
    //     700: 3,
    //     500: 2,
    //   };

    return (
        <Container fluid>
            <Row className="display-flex justifyContent-center">
                <Menu />
                <Col xs={9} className="">
                    <div className="mt-5 d-flex justify-content-center">
                        <img src="assets/frame.png" className="d-flex w-10 img-thumbnail " style={{ width: "80%", height: "80%", justifyContent: "center", alignItems: "center" }} alt="..."></img>
                    </div>
                    <br />
                    <h2>List Book</h2>
                    <br />
                    <Row xs={1} md={4} className="g-4">
                        {bukus?.map((data, index) => (
                            <Col md={3}>
                                <CardBooks item={data} key={index} />
                            </Col>
                        ))}

                        {/* {ListData?.length !== 0 ? (
                            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                                {ListData?.map((item, index) => (
                                    <CardBooks item={item} key={index} />
                                ))}
                            </Masonry>
                        ) : (
                            <Col>
                                <div className="text-center pt-5">
                                    <img src="assets/wow.png" className="img-fluid" style={{ width: "40%" }} alt="empty" />
                                    <div className="mt-3">No data product</div>
                                </div>
                            </Col>
                        )} */}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
