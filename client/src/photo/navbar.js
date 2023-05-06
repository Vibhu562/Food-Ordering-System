import React, { PureComponent } from "react";

import { NavDropdown, Container, Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
export class MainNavBar extends PureComponent {
  render() {
    return (
        <Navbar bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand className="text-light" href="#">Branding</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className="text-light" href="/">Home</Nav.Link>
              <Nav.Link className="text-light" href="#action2">Restaurants</Nav.Link>
              <Nav.Link className="text-light" href="/Recipes">Recipes</Nav.Link>
              <Nav.Link className="text-light" href="/Login"></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search for food..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        <Button variant="success" href="/Login">Login</Button>
      </Navbar>
    );
  }
}

export default MainNavBar;
