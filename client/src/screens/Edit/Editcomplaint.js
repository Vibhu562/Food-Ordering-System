import React from 'react'
import { useParams } from "react-router-dom";
import { getTableById, updateTable } from "../../actions/tableActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
import { getComplaintById ,updateComplaint } from '../../actions/complaintAction';
export default function Editcomplaint() {
    const { id } = useParams();
    const complaintstate = useSelector((state) => state.getComplaintByIdReducer);
    const { complaint, error, loading } = complaintstate;
    const updatecomplaintstate = useSelector((state) =>state.updateComplaintReducer)
  
    const {success , updateerror , updateloading} = updatecomplaintstate
  
    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [complainstatus, setcomplainstatus] = useState("");
    const [deletes, setdeletes] = useState("");

    

    
    useEffect(() => {
      if (complaint) {
        if (complaint._id == id) {
          setname(complaint.name);
          setcomplainstatus(complaint.complainstatus);
          setdeletes(complaint.deletes);
      
        } else {
          dispatch(getComplaintById(id));
        }
      } else {
        dispatch(getComplaintById(id));
      }
    }, [dispatch, complaint,id]);
  
    function editcomplaint(e) {
      e.preventDefault();
      const updatedcomplaint = {
        name: name,
        complainstatus:complainstatus,
        deletes:deletes,

      };
      dispatch(updateComplaint(id, updatedcomplaint));
    }
  return (
    <div className="table-responsive-sm me-4 ms-3 mt-2 card text-center shadow p-3 mb-5 bg-white rounded">
     <h2>Edit Table</h2>
     {loading && <Loader />}
     {updateloading && <Loader />}
    {updateerror && (<Error error='Something went wrong' />)}
     {success && (<Success success='Table Updated Successfully'/>)}
      {error && <Error error="something went wrong" />}
     {complaint && (
        <div>
          <form onSubmit={editcomplaint}>
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
              value={complainstatus}
              onChange={(e) => {
                setcomplainstatus(e.target.value);
              }}
            />
           <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="true / false"
              required
              value={deletes}
             
              onChange={(e) => {
                setdeletes(e.target.value);
              }}
            />
            <button
              className="btn mt-5 mb-n2 btn-primary"
              type="submit"
              style={{ float: "left" }}
            >
              Edit Complaint
            </button>
          </form>
        </div>
      )}
      
    </div>
  )
}
