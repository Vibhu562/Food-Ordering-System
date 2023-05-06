import axios from 'axios';

export const registerNewFeedback =(feedback)=>async(dispatch , getState)=>{
  const currentUser = getState().loginReducer.currentUser
    dispatch({type : "FEEDBACK_REGISTER_REQUEST"})

    axios 
        .post("/api/feedbacks/register" , feedback , currentUser)
        .then(res=>{
            dispatch({type : "FEEDBACK_REGISTER_SUCCESS"})
            console.log(res);
            window.location.reload();

        })
        .catch(err=> {
            dispatch({type : "FEEDBACK_REGISTER_FAILED" , payload: err})
            console.log(err);
        } );
}
export const updateFeedback =(feedbackid , updatedfeedback)=> dispatch=>{

  dispatch({type:'UPDATE_FEEDBACK_REQUEST'})

  axios.post('/api/feedbacks/updatefeedback' , {feedbackid , updatedfeedback}).then(res=>{
    console.log(res);
    dispatch({type:'UPDATE_FEEDBACK_SUCCESS'})
    window.location.href='/admin/feedbackslist'
    
  }).catch(err=>{
    dispatch({type:'UPDATE_FEEDBACK_FAILED'})

  })
};

export const getAllFeedbacks = () => (dispatch) => {
    dispatch({ type: "GET_ALLFEEDBACKS_REQUEST" });
  
    axios
      .get("/api/feedbacks/getallfeedbacks")
      .then((res) => {
        console.log(res);
        dispatch({ type: "GET_ALLFEEDBACKS_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "GET_ALLFEEDBACKS_FAILED", payload: err });
      });
  };
export const deleteFeedback=(feedbackid)=>dispatch=>{


    dispatch({type:'DELETE_FEEDBACK_REQUEST'})
 
    axios.post('/api/feedbacks/deletefeedback' , {feedbackid}).then(res=>{
 
      dispatch({type:'DELETE_FEEDBACK_SUCCESS' , payload : res.data})
      alert('Feedback deleted successfully')
      window.location.reload()
 
 
    }).catch(err=>{
      dispatch({type:'DELETE_FEEDBACK_FAILED' , payload : err})
 
    })
 
 
 }
 export const getFeedbacksByUserId=()=>(dispatch , getState)=>{

  const email = getState().loginReducer.currentUser.email

   dispatch({type:'GET_FEEDBACKSBYUSERID_REQUEST'})

   axios.post('/api/feedbacks/getfeedbacksbyuserid' , {email:email}).then(res=>{

        dispatch({type:'GET_FEEDBACKSBYUSERID_SUCCESS' , payload:res.data})
        console.log(res.data);
   }).catch(err=>{
       dispatch({type:'GET_FEEDBACKSBYUSERID_FAILED' , payload:err})
   })
}

 export const getFeedbackById = (feedbackid) => (dispatch) => {
  dispatch({ type: "GET_FEEDBACKBYID_REQUEST" });

  axios
    .post("/api/feedbacks/getfeedbackbyid", { feedbackid })
    .then((res) => {
      console.log(res);

      dispatch({ type: "GET_FEEDBACKBYID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_FEEDBACKBYID_FAILED", payload: err });
    });
};