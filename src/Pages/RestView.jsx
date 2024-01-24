import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../Components/RestReview';

const RestView = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showReview = () => {

  }

  return (
    <>
      <Row className='mt-5 mb-5'>
        <Col md={1} > </Col>
        <Col md={3} lg={3}>
          <img height={'300px'} width={'100%'} variant="top" src="https://cdn.pixabay.com/photo/2023/03/05/11/02/burger-7831128_960_720.jpg" />
        </Col>
        <Col md={7} lg={7}>
          <hr />
          <h4 className='text-center'><span className='text-warning me-2'>Restaurant</span>Details</h4>
          <hr />
          <ListGroup>
            <ListGroup.Item><h4 className='text-center'>Palaaram</h4></ListGroup.Item>
            <ListGroup.Item>Location: <span>Kakkanad</span></ListGroup.Item>
            <ListGroup.Item>Address: <span>Seaport-airport road</span></ListGroup.Item>
            <ListGroup.Item>Cuisine Type: <span>Traditional</span></ListGroup.Item>
            <ListGroup.Item className='text-center p-3'>
              <button onClick={handleShow} className='btn btn-warning me-3'>Operating Hours</button>
              <RestReview />
            </ListGroup.Item>
          </ListGroup>
          <hr />
        </Col>
        <Col md={1} > </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>Monday: <span className='text-primary'>12:00 PM - 10:00 PM</span></ListGroup.Item>
            <ListGroup.Item>Tuesday: <span className='text-primary'>12:00 PM - 10:00 PM</span></ListGroup.Item>
            <ListGroup.Item>Wednesday: <span className='text-primary'>12:00 PM - 10:00 PM</span></ListGroup.Item>
            <ListGroup.Item>Thursday: <span className='text-primary'>12:00 PM - 10:00 PM</span></ListGroup.Item>
            <ListGroup.Item>Friday: <span className='text-primary'>12:00 PM - 10:00 PM</span></ListGroup.Item>
            <ListGroup.Item>Saturday: <span className='text-primary'>12:00 PM - 10:00 PM</span></ListGroup.Item>
            <ListGroup.Item>Sunday: <span className='text-primary'>12:00 PM - 10:00 PM</span></ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default RestView