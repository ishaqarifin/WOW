import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Col, Dropdown, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../context/userContext";

// import {UserContext} from '../context/UserContext'
// import { Link } from "react-router-dom";

export default function Menu() {
    const [state, dispatch] = useContext(UserContext)
    let history = useHistory()

    const logout = ()=>{
        console.log(state);
        dispatch({
            type: "LOGOUT"
        })
        history.push('/')
    }
    return (
        <Col xs={3} className="display-flex justifyContent-center">
            <div class="d-flex mt-3 flex-column justify-content-center text-center">
                <div class="d-flex mb-5 justify-content-center">
                    <Link to={"/home"}>
                    <img src="assets/icon.png" alt="" />
                    </Link>
                </div>
                <div class="d-flex justify-content-center align-self-center mb-4" style={{ width: "100px", height: "100px" }}>
                    <img src="assets/my-image.jpg" class="img-fluid rounded-circle border border-dark border-4" alt="..."></img>
                </div>
                <p className="mb-5">Not Subsribe Yet</p>
                <div>
                <Dropdown.Divider />
                    <Nav.Link as={Link} to="/profile" className="my-4"><h4>Profile</h4></Nav.Link>
                    <Nav.Link as={Link} to="/subscribe" className="mb-4"><h4>Subsribe</h4></Nav.Link>
                    <Dropdown.Divider />
                </div>
                <div><Nav.Link onClick={logout} className="mt-3"><h4>Logout</h4></Nav.Link>
                </div>
            </div>
        </Col>
    );
}
