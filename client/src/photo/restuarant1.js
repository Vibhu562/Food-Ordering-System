import React from 'react'
import {Card,ListGroupItem,ListGroup} from 'react-bootstrap';
import MainNavBar from './navbar';
import restauranta from "./ra.jpg";
import restaurantb from "./rb.jpg";
import restuarantc from "./rc.jpg";

import { NavDropdown, Container, Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

function Restuarant() {
  return (
    <div>
            <MainNavBar />
            <span className="row justify-content-evenly m-6" >
          <Card className="col-6 bg shadow-lg" style={{ width: "35rem",background: "white" }}>
            <Card.Img className="mt-3 rounded" variant="top" src={restauranta} style={{height: "300px"}} />
            <Card.Body>
              <Card.Title className="text-start display-6 mb-4 fw-bold text-dark" >Tulsi</Card.Title>
              <Card.Text className="text-start fs-5 mb-4">
                Location :- Sector 77 Faridabad Haryana
              </Card.Text>
              <div className="d-grid gap-2">
              <Button variant="primary" className="btn-lg">
                <a className="text-decoration-none text-light" href="/Restuarant">
                  Go to Menu
                </a>
              </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="col-6 bg shadow-lg" style={{ width: "35rem",background: "white" }}>
            <Card.Img className="mt-3 rounded" variant="top" src={restaurantb}  style={{height: "300px"}} />
            <Card.Body>
              <Card.Title className="text-start display-6 mb-4 fw-bold text-dark">Om Sweets & Snacks</Card.Title>
              <Card.Text className="text-start fs-5 mb-4">
              Location :- Sector 77 Faridabad Haryana
              </Card.Text>
              <div className="d-grid gap-2">
              <Button variant="primary" className="btn-lg">
                <a className="text-decoration-none text-light" href="/Restuarant">
                  Go to Menu
                </a>
              </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="col-6 bg shadow-lg " style={{ width: "35rem",background: "white",marginTop:"30px" }}>
            <Card.Img className="mt-3 rounded" variant="top" src= {restuarantc}  style={{height: "300px"}} />
            <Card.Body>
              <Card.Title className="text-start display-6 mb-4 fw-bold text-dark">Anupam Sweets</Card.Title>
              <Card.Text className="text-start fs-5 mb-4">
              Location :- Sector 77 Faridabad Haryana
              </Card.Text>
              <div className="d-grid gap-2">
              <Button variant="primary" className="btn-lg">
                <a className="text-decoration-none text-light" href="/Restuarant">
                  Go to Menu
                </a>
              </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="col-6 bg shadow-lg " style={{ width: "35rem",background: "white",marginTop:"30px" }}>
            <Card.Img className="mt-3 rounded" variant="top" src= {restuarantc}  style={{height: "300px"}} />
            <Card.Body>
              <Card.Title className="text-start display-6 mb-4 fw-bold text-dark">Anupam Sweets</Card.Title>
              <Card.Text className="text-start fs-5 mb-4">
              Location :- Sector 77 Faridabad Haryana
              </Card.Text>
              <div className="d-grid gap-2">
              <Button variant="primary" className="btn-lg">
                <a className="text-decoration-none text-light" href="/Restuarant">
                  Go to Menu
                </a>
              </Button>
              </div>
            </Card.Body>
          </Card>
        </span>
    </div>
  )
}

export default Restuarant