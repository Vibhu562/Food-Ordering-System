import axios from "axios";
export const placeOrder =(token , subtotal,restaurantemail) => async(dispatch , getState)=>{

     const currentUser = getState().loginReducer.currentUser
     const demoItems = getState().cartReducer.cartItems
     const cartItems = new Array();
     for(var i=0 ; i<demoItems.length ; i++) {
          var item ={
               currentUser : demoItems[i].currentUser,
               name1: demoItems[i].name1,
               name : demoItems[i].name ,
               platter : demoItems[i].platter,
               otp : demoItems[i].otp,
               phonenumber : demoItems[i].phonenumber,
               quantity : demoItems[i].quantity,
               price : demoItems[i].price,
               totalprice : demoItems[i].totalprice,
               _id : demoItems[i]._id,
               time : demoItems[i].time,
               date : demoItems[i].date,
               currentUserphonenumber : demoItems[i].currentUserphonenumber,
          }
          cartItems.push(item)
     }
     dispatch({type:'PLACE_ORDER_REQUEST'})

     axios.post('/api/orders/placeorder' , {token , subtotal , currentUser , cartItems,restaurantemail}).then(res=>{
          dispatch({type:'PLACE_ORDER_SUCCESS'})
          console.log(res);
     }).catch(err=>{
         dispatch({type:'PLACE_ORDER_FAILED'})
     })


}


export const getOrdersByUserId=()=>(dispatch , getState)=>{

     const userid = getState().loginReducer.currentUser._id

      dispatch({type:'GET_ORDERSBYUSERID_REQUEST'})

      axios.post('/api/orders/getordersbyuserid' , {userid:userid}).then(res=>{

           dispatch({type:'GET_ORDERSBYUSERID_SUCCESS' , payload:res.data})
           console.log(res.data);

      }).catch(err=>{
          dispatch({type:'GET_ORDERSBYUSERID_FAILED' , payload:err})

      })


}

export const getOrderById=(orderid)=>(dispatch , getState)=>{

    

      dispatch({type:'GET_ORDERBYID_REQUEST'})

      axios.post('/api/orders/getorderbyid' , {orderid:orderid}).then(res=>{

           dispatch({type:'GET_ORDERBYID_SUCCESS' , payload:res.data})
           console.log(res.data);

      }).catch(err=>{
          dispatch({type:'GET_ORDERBYID_FAILED' , payload:err})

      })


}

export const getAllOrders=()=>(dispatch , getState)=>{

    

     dispatch({type:'GET_ALLORDERS_REQUEST'})

     axios.get('/api/orders/getallorders').then(res=>{

          dispatch({type:'GET_ALLORDERS_SUCCESS' , payload:res.data})
          console.log(res.data);

     }).catch(err=>{
         dispatch({type:'GET_ALLORDERS_FAILED' , payload:err})

     })


}
export const deleteOrder=(orderid)=>dispatch=>{
     dispatch({type:'DELETE_ORDER_REQUEST'})
     axios.post('/api/orders/deleteorder' , {orderid}).then(res=>{
       dispatch({type:'DELETE_ORDER_SUCCESS' , payload : res.data})
       alert('Order deleted successfully')
       window.location.reload()
     }).catch(err=>{
       dispatch({type:'DELETE_ORDER_FAILED' , payload : err})
     })}

export const updateOrder =(orderid , updatedorder)=> dispatch=>{

          dispatch({type:'UPDATE_ORDER_REQUEST'})
        
          axios.post('/api/orders/updateorder' , {orderid , updatedorder}).then(res=>{
            console.log(res);
            dispatch({type:'UPDATE_ORDER_SUCCESS'})
            window.location.href='/admin/orderlists'
            
          }).catch(err=>{
            dispatch({type:'UPDATE_ORDER_FAILED'})
        
          })
};
export const updatebyOrder =(orderid , updatedorder)=> dispatch=>{

     dispatch({type:'UPDATE_ORDERBY_REQUEST'})
   
     axios.post('/api/orders/updatebyorder' , {orderid , updatedorder}).then(res=>{
       console.log(res);
       dispatch({type:'UPDATE_ORDERBY_SUCCESS'})
       window.location.href='/orders'
       
     }).catch(err=>{
       dispatch({type:'UPDATE_ORDERBY_FAILED'})
   
     })
};    