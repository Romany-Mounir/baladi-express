import React from "react";
import logo from "../assets/logo.png";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { BsPerson, BsBag, BsSearch, BsGlobe } from "react-icons/bs";

export default function Header() {
  return (
    <Navbar className="nav-bar" expand="lg" fixed="top">
      <Navbar.Brand href="home">
        <img
          src={logo}
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>

      <Nav className="mr-auto">
        <Form className="search-form">
          <FormControl type="text" placeholder="search" className="mr-sm-2" />
          <Button className="search-button">
            <BsSearch />
          </Button>
        </Form>
        <Nav.Link className="nav-bar-link" href="#locaiton"> Location </Nav.Link>
        <Nav.Link className="nav-bar-link" href="#Language">
          <BsGlobe /> EN{" "}
        </Nav.Link>
        <Nav.Link className="nav-bar-link" href="#profile">
          <BsPerson />{" "}
        </Nav.Link>

        <Nav.Link className="nav-bar-link" href="#Cart">
          <BsBag />{" "}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
