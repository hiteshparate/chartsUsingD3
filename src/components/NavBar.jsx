import {  faPrint, faQuestionCircle, faSignOutAlt, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";


function NavBar() {
  return (
    <>

      <Navbar className="row " bg="primary" variant="dark">
        <div className="col-lg-3">
          <Navbar.Brand href="#home">ONR</Navbar.Brand>
        </div>
        <div className="col-lg-7"></div>

        <Nav className="col-lg-4">
          <Nav.Link href="#home"><FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon></Nav.Link>
          <Nav.Link href="#features"><FontAwesomeIcon icon={faSlidersH}></FontAwesomeIcon></Nav.Link>
          <Nav.Link href="#features"><FontAwesomeIcon icon={faPrint}></FontAwesomeIcon></Nav.Link>
          <Nav.Link href="#features"><FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon></Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
