import '../App.css';
import React from 'react'
import {Nav,Navbar,NavDropdown,Container,Form,FormControl,Image} from 'react-bootstrap';


export default function Header
(props) {
  return (
    <section>
      {/*  style={{backgroundColor: "white"}} */}
    <div variant="light">
        <>
        <Navbar  expand="lg" fixed="top" style={{backgroundColor: "#e78ea7 "}} className='back2'>
      <Container fluid>
      <Container className='col-1'>
      <Navbar.Brand href="#Home" >
        <img
          alt="logo"
          src="logo.png"
          width="70"
          height="70"
          className="d-inline-block align-top rounded "
        />{''}
      </Navbar.Brand>
    </Container>
    <Container className='col-3'/>
    <Container className='col-6 '>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 align-items-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#Home" className='mx-5 navtext font-link'>Home</Nav.Link>
            <Nav.Link href="#About" className='mx-5 navtext font-link'>About</Nav.Link>
            <Nav.Link href="#Skills" className='mx-5 navtext font-link'>Skills</Nav.Link>
            <Nav.Link href="#Education" className='mx-5 navtext font-link'>Education</Nav.Link>
            <Nav.Link href="#Projects" className='mx-5 navtext font-link'>Experience</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        <Container className='col-1 bg-dark'></Container>
      </Container>
    </Navbar>
</>
    </div>
    </section>
  )
}