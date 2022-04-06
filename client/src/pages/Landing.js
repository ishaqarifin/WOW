import React, { useState} from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap'
// import { useHistory } from "react-router-dom";
import SignIn from "../component/modal/SignIn";
import SignUp from "../component/modal/SignUp";
// import { UserContext } from "../context/userContext";

export default function Landing() {
    // let history = useHistory()

    // const [state] = useContext(UserContext)
    // const checkLanding = ()=> {
    //     if (state.isLogin === true) {
    //         history.push("/")
    //     }
    //     console.log(state);
    // }
    // checkLanding()

    const [showUp, setShowUp] = useState(false);
    const [showIn, setShowIn] = useState(false);
    
    const handleShowUp = () => setShowUp(true);
    const handleClose = () => setShowUp(false);
    const handleShowIn = () => setShowIn(true);
    const handleCloseIn = () => setShowIn(false);


    return (
        <>
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
                src="assets/bgbook.png"
                style={{
                    width: "100%",
                    position: "absolute",
                    marginRight: "0",
                    zIndex: "-1",
                }}
                alt=""
                />
            <Container class="container-fluid">
                <Row class="container" style={{ display: "flex", justifyContent: "center" }}>
                    <Col sm={6}>
                        <img src="assets/wow.png" style={{ width: "449px", marginTop: "0px" }} alt="" />
                        {/* <p style={{ marginTop: "10px" }}>Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</p> */}
                        <Col
                            style={{
                                display: "flex",
                                marginBottom: "10px",
                                // justifyContent: "space-evenly",
                            }}
                        >
                            <Button onClick={handleShowUp} variant="danger wd-100px mt-5 mx-4" style={{ width: "150px" }}>
                                Sign Up
                            </Button>
                            <Button onClick={handleShowIn} variant="light mt-5" style={{ width: "150px", backgroundColor: "GrayText" }}>
                                Sign In
                            </Button>
                        </Col>
                    </Col>
                    <Col sm={6}>{/* sm=4 */}</Col>
                </Row>
            </Container>
        </div>
        <SignIn showIn={showIn} handleClose={handleCloseIn} />
        <SignUp showUp={showUp} handleClose={handleClose} />
        </>
        
    );
}
