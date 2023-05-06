import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFoodById } from "../../actions/foodAction";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Extra() {
  const [num_orders, setnum_orders] = useState("");
  const [category, setcategory] = useState("");
  const [avg_rating, setavg_rating] = useState("");
  const [num_rating, setnum_rating] = useState("");
  const [tags, settags] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/append-data", {
        method: "POST",
        body: JSON.stringify({
          restaurant: restaurant.name,
          id: food._id,
          title: food.name,
          canteen_id: 1,
          price: food.price,
          num_orders: food.num_orders,
          category: category,
          avg_rating: food.rating,
          num_rating: food.reviews.length,
          tags: tags,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  let { id } = useParams();
  const dispatch = useDispatch();

  const getfoodbyidstate = useSelector((state) => state.getFoodByIdReducer);
  const { food, loading, error } = getfoodbyidstate;
  useEffect(() => {
    dispatch(getFoodById(id));
  }, [dispatch]);

  const getrestaurantbyidstate = useSelector(
    (state) => state.getRestaurantByIdReducer
  );
  const { restaurant } = getrestaurantbyidstate;

  return (
    <form
      onSubmit={handleSubmit}
      style={{ textAlign: "left" }}
      className="ms-3 p-2"
    >
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className="mb-0" htmlFor="id">
          ID
        </Form.Label>
        <Form.Control
          className="w-25 mt-1"
          type="text"
          id="id"
          value={food._id}
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className="mb-0" htmlFor="title">
          Title
        </Form.Label>
        <Form.Control
          className="w-25 mt-1"
          type="text"
          id="title"
          value={food.name}
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className="mb-0" htmlFor="price">
          Price of food items:
        </Form.Label>
        <Form.Control
          className="w-25 mt-1"
          type="text"
          id="price"
          value={food.price}
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className="mb-0" htmlFor="num_orders">
          Num of orders of food items:
        </Form.Label>
        <Form.Control
          className="w-25 mt-1"
          type="text"
          id="num_orders"
          value={food.num_orders}
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className="mb-0" htmlFor="category">
          Category of food items:
        </Form.Label>
        <Form.Control
          className="w-25 mt-1"
          type="text"
          id="category"
          value={category}
          onChange={(event) => setcategory(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className="mb-0" htmlFor="avg_rating">
          Avg Rating of Food Items:
        </Form.Label>
        <Form.Control
          className="w-25 mt-1"
          type="text"
          id="avg_rating"
          value={food.rating}
          onChange={(event) => setavg_rating(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className="mb-0" htmlFor="tags">
          Tags of food items:
        </Form.Label>
        <Form.Control
          className="w-25 mt-1"
          type="text"
          id="tags"
          value={tags}
          onChange={(event) => settags(event.target.value)}
        />
      </Form.Group>
      <Button className="btn btn-dark" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Extra;
