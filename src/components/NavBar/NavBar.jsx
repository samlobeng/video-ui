import React from 'react'
import './style.css'
import {Navbar, Container, Nav} from 'react-bootstrap'
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <i class="fa-solid fa-play play"></i>
    <Navbar.Brand onClick={() => {window.location.href="/home"}} className='text-green'><span>Video UI</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#programming">Programming</Nav.Link>
        <Nav.Link href="#sports">Sports</Nav.Link>
        <Nav.Link href="#education">Education</Nav.Link>
        <Nav.Link onClick={() => {window.location.href="/"}}>Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar