import data from "./data";
import "../../index.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
function Csv() {
  const getrestaurantbyidstate = useSelector(
    (state) => state.getRestaurantByIdReducer
  );
  const { restaurant } = getrestaurantbyidstate;
  return (
    
    <div className="m-4">
      <h1 className="text-center fs-3">Recommendations</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Restaurant Name</th>
            <th>title</th>
            <th>num_rating</th>
            <th>avg_rating</th>
            <th>score</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          { data.map((item) => (
            restaurant.name == item.Restaurant ?
            <tr>
              <td>{item.Restaurant}</td>
              <td>{item.title}</td>
              <td>{item.num_rating}</td>
              <td>{item.avg_rating}</td>
              <td>{item.score}</td>
              <td>Top Rated Items</td>
            </tr>:""
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Csv;
