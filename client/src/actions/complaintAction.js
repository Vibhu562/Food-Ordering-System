import axios from 'axios';

export const registerNewComplaint =(complaint)=>async(dispatch , getState)=>{
  const currentUser = getState().loginReducer.currentUser
    dispatch({type : "COMPLAINT_REGISTER_REQUEST"})

    axios 
        .post("/api/complaints/register" , complaint , currentUser)
        .then(res=>{
            dispatch({type : "COMPLAINT_REGISTER_SUCCESS"})
            console.log(res);
            window.location.reload();

        })
        .catch(err=> {
            dispatch({type : "COMPLAINT_REGISTER_FAILED" , payload: err})
            console.log(err);
        } );
}
export const updateComplaint =(complaintid , updatedcomplaint)=> dispatch=>{

  dispatch({type:'UPDATE_COMPLAINT_REQUEST'})

  axios.post('/api/complaints/updatecomplaint' , {complaintid , updatedcomplaint}).then(res=>{
    console.log(res);
    dispatch({type:'UPDATE_COMPLAINT_SUCCESS'})
    window.location.href='/admin/complaintslist'
    
  }).catch(err=>{
    dispatch({type:'UPDATE_COMPLAINT_FAILED'})

  })
};

export const getAllComplaints = () => (dispatch) => {
    dispatch({ type: "GET_ALLCOMPLAINTS_REQUEST" });
  
    axios
      .get("/api/complaints/getallcomplaints")
      .then((res) => {
        console.log(res);
        dispatch({ type: "GET_ALLCOMPLAINTS_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "GET_ALLCOMPLAINTS_FAILED", payload: err });
      });
  };
export const deleteComplaint=(complaintid)=>dispatch=>{


    dispatch({type:'DELETE_COMPLAINT_REQUEST'})
 
    axios.post('/api/complaints/deletecomplaint' , {complaintid}).then(res=>{
 
      dispatch({type:'DELETE_COMPLAINT_SUCCESS' , payload : res.data})
      alert('Complaint deleted successfully')
      window.location.reload()
 
 
    }).catch(err=>{
      dispatch({type:'DELETE_COMPLAINT_FAILED' , payload : err})
 
    })
 
 
 }
 export const getComplaintsByUserId=()=>(dispatch , getState)=>{

  const email = getState().loginReducer.currentUser.email

   dispatch({type:'GET_COMPLAINTSBYUSERID_REQUEST'})

   axios.post('/api/complaints/getcomplaintsbyuserid' , {email:email}).then(res=>{

        dispatch({type:'GET_COMPLAINTSBYUSERID_SUCCESS' , payload:res.data})
        console.log(res.data);
   }).catch(err=>{
       dispatch({type:'GET_COMPLAINTSBYUSERID_FAILED' , payload:err})
   })
}

 export const getComplaintById = (complaintid) => (dispatch) => {
  dispatch({ type: "GET_COMPLAINTBYID_REQUEST" });

  axios
    .post("/api/complaints/getcomplaintbyid", { complaintid })
    .then((res) => {
      console.log(res);

      dispatch({ type: "GET_COMPLAINTBYID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_COMPLAINTBYID_FAILED", payload: err });
    });
};