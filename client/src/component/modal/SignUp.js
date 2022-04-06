import React, {useState } from 'react'
import { Alert, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useHistory } from 'react-router-dom';
// import { UserContext } from '../../context/userContext';

//---------useMutation=post,patch,delete & useQuery=get
import {useMutation} from "react-query"
import {API} from "../../config/api"
import { Link } from 'react-router-dom';

export default function SignUp({ showUp, handleClose }) {
    // let history = useHistory()
    //---------------s
    let api = API()
    // const [dispatch] = useContext(UserContext)
    const [message, setMessage] = useState(null);
//--------create variable for store
const [form, setForm] = useState({
    email: "",
    password: "",
    fullname: ""
})
const {email, password, fullname} = form;
    const handleChange = (e)=> {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit =useMutation(async (e)=> {
        try {
            e.preventDefault()
            //-------data body
            const body = JSON.stringify(form)
            //-------config content type
            const config = {
                method : "POST",
                headers : {
                    "Content-type": "application/json"
                },
                body:body
            }
            console.log(config.body);

        //----consume API
        const response = await api.post('/addregister', config)
        console.log(response);
        
        //----notification
        if (response.status === "success...") {
            const alert = (
                <Alert variant="success" className="py-1">
                Success
                </Alert>
            );
            setMessage(alert);
            setForm({
                email: "",
                password: "",
                fullname: "",
            });
            } else {
            const alert = (
                <Alert variant="danger" className="py-1">
                Failed
                </Alert>
            );
            setMessage(alert);
            }
            console.log(response);
    } catch (error) {
        const alert = (
            <Alert variant="danger" className="py-1">
                Failed
            </Alert>
            );
            setMessage(alert);
            console.log(error);
        }
    })
  return (
    <Modal  show={showUp} onHide={handleClose} centered>
        <Modal.Body className="text-dark">
            <div className="d-flex justify-content-center">
                <div className="card-auth p-4">
                    <div style={{ fontSize: "36px", lineHeight: "49px", fontWeight: "700" }}>SignUp</div>
                    {message && message}
                    <form onSubmit={(e)=> handleSubmit.mutate(e)}>
                    <div className="mt-5 form">

                        <input className="px-3 py-2" 
                        placeholder="Email" 
                        value={email}
                        name= "email"
                        onChange={handleChange}
                        />
                        <input className="px-3 py-2 mt-3" 
                        placeholder="Password" 
                        value={password}
                        name= "password"
                        onChange={handleChange}
                        />
                        <input className="px-3 py-2 mt-3" 
                        placeholder="Full Name" 
                        value={fullname}
                        name= "fullname"
                        onChange={handleChange}
                        />
                        
                    </div>
                    <div className="d-grid gap-2 mt-5">
                        <Button type='submit' className="btn btn-login">
                            Register
                        </Button>
                        <p>already have an account? please login</p>
                    </div>
                    </form>
                </div>
            </div>
        </Modal.Body>
    </Modal>
  )
}
