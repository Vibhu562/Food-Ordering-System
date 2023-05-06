import React from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import { updatebyOrder,getOrderById } from '../../actions/orderActions';

export default function Editorders() {
    const { id } = useParams();
    const orderstate = useSelector((state) => state.getOrderByIdReducer);
    const { order, error, loading } = orderstate;
    const updateorderstate = useSelector((state) =>state.updateOrderReducer)
    const {success , updateerror , updateloading} = updateorderstate
    const dispatch = useDispatch();
    const [cancel, setcancels] = useState("");
   

    useEffect(() => {
      if (order) {
        if (order._id == id) {
          setcancels(order.cancel);
        } else {
          dispatch(getOrderById(id));
        }
      } else {
        dispatch(getOrderById(id));
      }
    }, [dispatch, order,id]);
  
    function editorder(e) {
      e.preventDefault();
      const updatedorder = {
        cancel: cancel,
      };
      dispatch(updatebyOrder(id, updatedorder));
     
    }
  return (
    <div className="table-responsive-sm me-4 ms-3 mt-3 card text-center shadow p-3 mb-5 bg-white rounded">
     <h2>Edit Order</h2>
     {loading && <Loader />}
     {updateloading && <Loader />}
    {updateerror && (<Error error='Something went wrong' />)}
     {success && (<Success success='Order Updated Successfully'/>)}
      {error && <Error error="something went wrong" />}
     {order && (
        <div>
          <form onSubmit={editorder}>
          <div>Write true if you want to cancel order or else write false</div>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Cancel you order	"
              required
              value={cancel}
              onChange={(e) => {
                setcancels(e.target.value);
              }}
            />

            <button
              className="btn mt-5 mb-n2 btn-primary justify-content-center"
              type="submit"
              style={{ float: "left" }}
            >
              Update Order Status
            </button>
          </form>
        </div>
      )}
      
    </div>
  )
}
