import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <>
      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>FOOD CIRCLE</Link>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#features" className='text-light'>Features</Nav.Link>
            <Nav.Link href="#pricing" className='text-light'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  )
}

export default Head