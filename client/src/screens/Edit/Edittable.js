import React from 'react'
import { useParams } from "react-router-dom";
import { getTableById, updateTable } from "../../actions/tableActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'

export default function Edittable() {
    const { id } = useParams();
    const tablestate = useSelector((state) => state.getTableByIdReducer);
    const { table, error, loading } = tablestate;
    const updatetablestate = useSelector((state) =>state.updateTableReducer)
  
    const {success , updateerror , updateloading} = updatetablestate
  
    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [tableavailable, settableavailable] = useState("");
    

    
    useEffect(() => {
      if (table) {
        if (table._id == id) {
          setname(table.name);
          settableavailable(table.tableavailable);
      
        } else {
          dispatch(getTableById(id));
        }
      } else {
        dispatch(getTableById(id));
      }
    }, [dispatch, table,id]);
  
    function edittable(e) {
      e.preventDefault();
      const updatedtable = {
        name: name,
        tableavailable:tableavailable,
      };
      dispatch(updateTable(id, updatedtable));
    }
  return (
    <div className="table-responsive-sm me-4 ms-3 mt-2 card text-center shadow p-3 mb-5 bg-white rounded">
     <h2>Edit Table</h2>
     {loading && <Loader />}
     {updateloading && <Loader />}
    {updateerror && (<Error error='Something went wrong' />)}
     {success && (<Success success='Table Updated Successfully'/>)}
      {error && <Error error="something went wrong" />}
     {table && (
        <div>
          <form onSubmit={edittable}>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="name"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
         <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="name"
              required
              value={tableavailable}
              onChange={(e) => {
                settableavailable(e.target.value);
              }}
            />
           
            <button
              className="btn mt-5 mb-n2 btn-primary"
              type="submit"
              style={{ float: "left" }}
            >
              Edit Table
            </button>
          </form>
        </div>
      )}
      
    </div>
  )
}
