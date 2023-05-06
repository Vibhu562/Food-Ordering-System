import React, { PureComponent } from "react";
import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import foodImage from "./food_placeholder.jpg";
import restaurantImage from "./restaurant_placeholder.jpg";
export class HomeScreenCard extends PureComponent {
  render() {
    return (
      <div>
        <span className="row justify-content-evenly m-5" >
          <Card className="col-6 bg shadow-lg" style={{ width: "30rem",background: "white" }}>
            <Card.Img className="mt-3 rounded" variant="top" src={restaurantImage} style={{height: "300px"}} />
            <Card.Body>
              <Card.Title className="text-start display-6 mb-4 fw-bold text-dark" >RESTAURANTS</Card.Title>
              <Card.Text className="text-start fs-5 mb-4">
                Browse you nearby restaurants that are serving delicious food right now
              </Card.Text>
              <div className="d-grid gap-2">
              <Button variant="primary" className="btn-lg">
                <a className="text-decoration-none text-light" href="/Restuarant">
                  Go to restaurants
                </a>
              </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="col-6 bg shadow-lg" style={{ width: "30rem",background: "white" }}>
            <Card.Img className="mt-3 rounded" variant="top" src={foodImage}  style={{height: "300px"}} />
            <Card.Body>
              <Card.Title className="text-start display-6 mb-4 fw-bold text-dark">RECIPES</Card.Title>
              <Card.Text className="text-start fs-5 mb-4">
              Browse from hundreds of delicious food items and recipes
              </Card.Text>
              <div className="d-grid gap-2">
              <Button variant="primary" className="btn-lg">
                <a className="text-decoration-none text-light" href="/Restuarant">
                  Go to food items
                </a>
              </Button>
              </div>
            </Card.Body>
          </Card>
        </span>
      </div>
    );
  }
}

export default HomeScreenCard;
