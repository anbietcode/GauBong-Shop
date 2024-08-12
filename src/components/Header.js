import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import './header.css';
import React from 'react';

const Header = () => {
  return (
    <Navbar expand="lg" className="body-bg ">
      <Container>
        <Navbar.Brand href="#home"><img height={75} src={require("./logo3.png")} alt="Hình 1" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/homes" className='nav-link'><strong>Home</strong></Link>
            <NavDropdown title="Collection" id="basic-nav-dropdown" style={{fontWeight: "bold"}}  >
              <NavDropdown.Item  style={{fontWeight: "bold" }} href="teddybear"><stong>Teddy bear</stong><hr/></NavDropdown.Item>
              <NavDropdown.Item href="bunnies"  style={{fontWeight: "bold" }}><stong>Bunnies</stong><hr/></NavDropdown.Item>
              <NavDropdown.Item href="cat"  style={{fontWeight: "bold" }}><stong>Cat</stong></NavDropdown.Item>
            </NavDropdown>
            <Link to="About" className='nav-link' style={{fontWeight: "bold"}}>About</Link>
            <NavDropdown title="Admin" id="basic-nav-dropdown" style={{fontWeight: "bold"}} >
              <NavDropdown.Item href="admins" style={{fontWeight: "bold" }}><stong>Product</stong><hr/></NavDropdown.Item>
              <NavDropdown.Item href="shippings" style={{fontWeight: "bold" }}><stong>Shipping</stong></NavDropdown.Item>
            </NavDropdown>
            <form class="d-flex topnav " role="search">
              <div style={{ width: 300 + 'px'}} className="bgsearchbox">
                <div className="row2">
                  <input className="input-box1 m-2" type="text" placeholder="Seach anything" autoComplete="off" />
                  <button style={{ background: "transparent", border: 0, outline: 0 }}><i style={{ width: 25 + 'px', color: "#555", fontSize: 22 + 'px', cursor: "pointer" }} class="bi bi-search"></i></button>
                </div>
                </div>
            </form>
            <div>
              <a class="btn btn-warning m-2" href="Login" role="button"><strong>LOGIN</strong></a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;