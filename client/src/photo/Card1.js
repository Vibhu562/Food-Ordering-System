import React, { PureComponent } from "react";
import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Abc from "./Abc.jpg";
import Xyz from "./Xyz.jpg";
export class Card1 extends PureComponent {
  render() {
    return (
      <div>
        <span className="row justify-content-evenly m-4" >
          <Card className="col-6 bg" style={{ width: "25rem",background: "lightblue" }}>
            <Card.Img className="mt-3 rounded" variant="top" src={Abc} style={{height: "250px"}} />
            <Card.Body>
              <Card.Title className="text-light fs-2 fw-bold text-dark" >RESTAURANTS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="success">
                <a className="text-decoration-none text-light" href="/Restuarant">
                  Browse Restaurants
                </a>
              </Button>
            </Card.Body>
          </Card>
          <Card className="col-6 bg" style={{ width: "25rem",background: "lightblue" }}>
            <Card.Img className="mt-3 rounded" variant="top" src={Xyz}  style={{height: "250px"}} />
            <Card.Body>
              <Card.Title className="text-light fs-2 fw-bold text-dark">RECIPES</Card.Title>
              <Card.Text>
              Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="success">
                <a className="text-decoration-none text-light" href="/Signup">
                  Browse Recipes
                </a>
              </Button>
            </Card.Body>
          </Card>
        </span>
      </div>
    );
  }
}

export default Card1;
