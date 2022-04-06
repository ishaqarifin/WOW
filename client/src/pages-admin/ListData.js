import React, {useContext} from "react";
import { Col, Container, Row, Dropdown, DropdownButton, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useQuery } from "react-query";
import { API } from "../config/api";
import table from "react-bootstrap/Table";
import { UserContext } from "../context/userContext";
import { useHistory, Link } from "react-router-dom";
// import ListTrans from "../component/Data/ListTrans";

export default function ListData() {
    let history = useHistory()
    let api = API();

    const [state, dispatch] = useContext(UserContext)
    // Create process for fetching transactions data from database with useQuery here ...
    let { data: transactions, refetch } = useQuery("transactionsCache", async () => {
        const config = {
            method: "GET",
            headers: {
                Authorization: "Basic " + localStorage.token,
            },
        };
        console.log(config);
        const response = await api.get("/transaction");
        console.log(response);
        return response.data.transactions;
    });
    console.log(transactions);


    const logout = ()=>{
        console.log(state);
        dispatch({
            type: "LOGOUT"
        })
        history.push('/')
    }

    return (
        <Container fluid className="d-flex flex-column justify-content-center">
            <Row>
                <Col xs={14}>
                    <div className="d-flex justify-content-between p-3 mt-3">
                        <div className="d-flex mb-5 justify-content-center">
                            <img src="assets/icon.png" alt="" />
                        </div>
                        <div className="d-flex justify-content-center align-self-center mb-4" style={{ width: "50px", height: "50px" }}>
                            <DropdownButton variant="outline-secondary" title={<img src="assets/icon.png" class="img-fluid rounded-circle border border-dark border-2" alt="..."></img>} id="input-group-dropdown-1">
                                <Dropdown.Item href="addbook">Add Book</Dropdown.Item>
                                <Dropdown.Divider />
                                <Nav.Link onClick={logout} className="mt-3">Logout</Nav.Link>
                            </DropdownButton>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs lg="12" className="d-flex flex-column justify-content-center align-items-center">
                    <h3 className="ms-5 mb-3">Incoming Trasaction</h3>

                    <table striped bordered hover className="w-75">
                        <thead>
                            <tr>
                                <th>N0</th>
                                <th>User</th>
                                <th>Bukti Transfer</th>
                                <th>Remaining Active</th>
                                <th>Status User</th>
                                <th>Status Payment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions?.map((data, index) => (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.user}</td> 
                                    <td>{data.transferProof}</td>
                                    <td>{data.remainingActive}</td>
                                    <td>{data.statusUser}</td>
                                    <td>{data.statusPayment}</td>
                                    <td>
                                        <DropdownButton variant="outline-secondary" id="input-group-dropdown-1">
                                            <Dropdown.Item href="#">Approved</Dropdown.Item>
                                            <Dropdown.Item href="#">Cencel</Dropdown.Item>
                                        </DropdownButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
}
