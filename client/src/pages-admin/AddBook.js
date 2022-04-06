import React, { useState } from 'react'
import { Col, Container, Row, Form, Button, Alert, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"
import { useMutation } from 'react-query';
import { API } from '../config/api';

export default function AddBook() {
    // let history = useHistory()
    let api = API()

    const [message, setMessage] = useState(null);
    // const [book, setBook] = useState("")
    const [preview, setPreview] = useState(null)

    const [form, setForm] = useState({
        title:"",
        pages:"",
        publication:"",
        author:"",
        isbn:"",
        about:"",
        bookFile:"",
        bookCover:""
    })
    // const {title, pages, publication, author, isbn, about} = form;
    
    // Handle change data on form
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
        });
        // console.log(form);

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  // Create function for handle insert product data with useMutation here ...
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      // data body
    //   const body = JSON.stringify(form)
      const formData = new FormData()
      formData.set("title", form.title)
      formData.set("pages", form.pages)
      formData.set("publication", form.publication)
      formData.set("author", form.author)
      formData.set("isbn", form.isbn)
      formData.set("about", form.about)
      formData.set("bookFile", form.bookFile[0], form.bookFile[0].name)
    //   formData.set("bookCover", form.bookCover[0], form.bookCover[0].name)

      // config content type
      const config = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + localStorage.token
        },
        body: formData
      }
      console.log(config.body);
      // consume API
      const response = await api.post('/addbuku', config)

      console.log(response);
      //----notification
      if (response.status === "success") {
        const alert = (
            <Alert variant="success" className="py-1">
            book added
            </Alert>
        ); 
        setMessage(alert);
        } else {
        const alert = (
            <Alert variant="danger" className="py-1">
            Failed add book
            </Alert>
        );
        setMessage(alert);
        }
        console.log(response);
    //   history.push('/listdata')

    } catch (error) {
      console.log(error);
    }
  })
  return (
    <Container fluid className="d-flex flex-column justify-content-center">
            <Row>
                <Col xs={14}>
                    <div class="d-flex justify-content-between p-3 mt-3">
                    <Nav.Link as={Link} to="/listData">
                        <div class="d-flex mb-5 justify-content-center">
                            <img src="assets/icon.png" alt="" />
                        </div>
                    </Nav.Link>
                        <div class="d-flex justify-content-center align-self-center mb-4" style={{ width: "50px", height: "50px" }}>
                            <img src="assets/icon.png" class="img-fluid rounded-circle border border-dark border-2" alt="..."></img>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs lg="12" className="d-flex flex-column justify-content-center align-items-center mb-4">
                    <h3 className="ms-5 mb-3">Add Book</h3>
                    {message && message}
                    <Form onSubmit={(e) => handleSubmit.mutate(e)} style={{width:"50%"}}>
                        <Form.Group style={{}} className="mb-3" controlId="formBasicTitle">
                            <Form.Control 
                                type="text" 
                                placeholder="Title"
                                name="title"
                                // value={title}
                                onChange={handleChange}
                                />
                        </Form.Group>
                        <Form.Group style={{}} className="mb-3" controlId="formBasicPublicationdate">
                            <Form.Control 
                            type="text" 
                            placeholder="Publication Date" 
                            // value={publication}
                            name='publication'
                            onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group style={{}} className="mb-3" controlId="formBasicpages">
                            <Form.Control 
                            type="text" 
                            placeholder="pages" 
                            // value={pages}
                            name='pages'
                            onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group style={{}} className="mb-3" controlId="formBasicAuthor">
                            <Form.Control 
                            type="text" 
                            placeholder="Author"
                            // value={author}
                            name='author'
                            onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group style={{}} className="mb-3" controlId="formBasicISBN">
                            <Form.Control 
                            type="text" 
                            placeholder="ISBN"
                            // value={isbn}
                            name='isbn'
                            onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group style={{}} className="mb-3" controlId="formBasicabout">
                            <Form.Control 
                            as="textarea" 
                            rows={5} 
                            placeholder="About This Book" 
                            // value={about}
                            name='about'
                            onChange={handleChange}
                            />
                        </Form.Group>
                        {preview && (
                            <div>
                                <img
                                    src={preview}
                                    style={{
                                    maxWidth: "150px",
                                    maxHeight: "150px",
                                    objectFit: "cover",
                                    }}
                                    alt="preview"
                                />
                            </div>
                        )}
                        {/* <input type="file" id="upload" name="bookFile" hidden onChange={handleChange} />
                        <label for="upload" className="label-file-add-product">
                            Upload file
                        </label> */}

                        <Form.Group style={{}} className="mb-3" placeholder='cover' controlId="formBasicAttache">
                            <Form.Control 
                            placeholder='cover'
                            type="file" 
                            name='bookFile'
                            onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="danger" type="submit">
                            Add Book
                        </Button>
                        {/* <Form.Text style={{}} className="text-muted">
                            Already have an account ? Klik <b>Here</b>
                        </Form.Text> */}
                    </Form>
                </Col>
            </Row>
        </Container>
  )
}
