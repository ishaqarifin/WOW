import React, { useContext, useState } from 'react'
import { Alert, Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router-dom';

import {useMutation} from "react-query"
import {API} from "../../config/api"
import { UserContext } from '../../context/userContext';

export default function SignIn({ showIn, handleClose }) {
    let history = useHistory()
    let api = API()

    const [state, dispatch] = useContext(UserContext)
    const [message, setMessage] = useState(null)
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const {email, password} = form;

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

// --------Create function for handle login process with useMutation here ...
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      // data body
      const body = JSON.stringify(form)

      // config content type
      const config = {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: body
      }

      // consume API
      const response = await api.post('/login', config)

      console.log(response);

      // notification
      if (response.status === "success") {
        // kirim data ke userContext
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data
        })
        console.log(dispatch);

        //cek status user
        if (response.data.role === "admin") {
          history.push("/listdata")
        } else {
          history.push("/home")
        }

        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Login Failed
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Login Failed
        </Alert>
      );
      setMessage(alert);
    }
  })
  return (
    <Modal show={showIn} onHide={handleClose} centered>
            <Modal.Body className="text-dark">
                <div className="d-flex justify-content-center">
                    <div className="card-auth p-4">
                        <div style={{ fontSize: "36px", lineHeight: "49px", fontWeight: "700" }}>
                          Login
                        </div>
                        {message && message}
                        <Form onSubmit={(e)=> handleSubmit.mutate(e)}>
                            <div className="mt-3 form">
                                <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                name="email"
                                onChange={handleChange}
                                className="px-3 py-2 mt-3"
                                />
                                <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                name="password"
                                onChange={handleChange}
                                className="px-3 py-2 mt-3"
                                />
                            </div>
                            <div className="d-grid gap-2 mt-5">
                                <Button variant='primary' type='submit' className="btn btn-login">Login</Button>
                                already have an account? Klik here
                            </div>
                        </Form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
  )
}
