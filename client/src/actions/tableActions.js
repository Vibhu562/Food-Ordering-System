import axios from 'axios';

export const registerNewTable =(table)=>async(dispatch , getState)=>{
  const currentUser = getState().loginReducer.currentUser
    dispatch({type : "TABLE_REGISTER_REQUEST"})

    axios 
        .post("/api/tables/register" , table , currentUser)
        .then(res=>{
            dispatch({type : "TABLE_REGISTER_SUCCESS"})
            console.log(res);
            window.location.reload();
        })
        .catch(err=> {
            dispatch({type : "TABLE_REGISTER_FAILED" , payload: err})
            console.log(err);
        } );
}
export const updateTable =(tableid , updatedtable)=> dispatch=>{

  dispatch({type:'UPDATE_TABLE_REQUEST'})

  axios.post('/api/tables/updatetable' , {tableid , updatedtable}).then(res=>{
    console.log(res);
    dispatch({type:'UPDATE_TABLE_SUCCESS'})
    window.location.href='/admin/tableslist'
    
  }).catch(err=>{
    dispatch({type:'UPDATE_TABLE_FAILED'})

  })
};

export const getAllTables = () => (dispatch) => {
    dispatch({ type: "GET_ALLTABLES_REQUEST" });
  
    axios
      .get("/api/tables/getalltables")
      .then((res) => {
        console.log(res);
        dispatch({ type: "GET_ALLTABLES_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "GET_ALLTABLES_FAILED", payload: err });
      });
  };
export const deleteTable=(tableid)=>dispatch=>{


    dispatch({type:'DELETE_TABLE_REQUEST'})
 
    axios.post('/api/tables/deletetable' , {tableid}).then(res=>{
 
      dispatch({type:'DELETE_TABLE_SUCCESS' , payload : res.data})
      alert('Table deleted successfully')
      window.location.reload()
 
 
    }).catch(err=>{
      dispatch({type:'DELETE_TABLE_FAILED' , payload : err})
 
    })
 
 
 }
 export const getTablesByUserId=()=>(dispatch , getState)=>{

  const email = getState().loginReducer.currentUser.email

   dispatch({type:'GET_TABLESBYUSERID_REQUEST'})

   axios.post('/api/tables/gettablesbyuserid' , {email:email}).then(res=>{

        dispatch({type:'GET_TABLESBYUSERID_SUCCESS' , payload:res.data})
        console.log(res.data);
   }).catch(err=>{
       dispatch({type:'GET_TABLESBYUSERID_FAILED' , payload:err})
   })
}

 export const getTableById = (tableid) => (dispatch) => {
  dispatch({ type: "GET_TABLEBYID_REQUEST" });

  axios
    .post("/api/tables/gettablebyid", { tableid })
    .then((res) => {
      console.log(res);

      dispatch({ type: "GET_TABLEBYID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_TABLEBYID_FAILED", payload: err });
    });
};