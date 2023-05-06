export const placeOrderReducer =(state={} , action)=>{

    switch(action.type)
    {
        case 'PLACE_ORDER_REQUEST' : return{
            ...state ,
            loading : true
        }
        case 'PLACE_ORDER_SUCCESS' : return{
         ...state ,
         loading : false,
         success : true
     }
     case 'PLACE_ORDER_FAILED' : return{
         ...state ,
         loading : false,
         error : true
     }
     default : return state
    }



}

export const getOrdersByUserIdReducer =(state={} , action)=>{


 switch(action.type)
 {
     case 'GET_ORDERSBYUSERID_REQUEST' : return{
         ...state ,
         loading : true
     }
     case 'GET_ORDERSBYUSERID_SUCCESS' : return{
      ...state ,
      loading : false,
      orders : action.payload
  }
  case 'GET_ORDERSBYUSERID_FAILED' : return{
      ...state ,
      loading : false,
      error : true
  }
  default : return state
 }



}

export const deleteOrderReducer = (state={} , action)=>{

    switch(action.type)
    {
    case 'DELETE_ORDERS_REQUEST' : return {
        ...state ,
        loading : true
    }
    case 'DELETE_ORDER_SUCCESS' : return {
        ...state ,
        loading : false , 
        success : true
    }
    case 'DELETE_ORDER_FAILED' : return {
        ...state ,
        loading : false,
        error : action.payload
    }
    
    default : return state
    }
    
    }


export const getOrderByIdReducer =(state={} , action)=>{


 switch(action.type)
 {
     case 'GET_ORDERBYID_REQUEST' : return{
         ...state ,
         loading : true
     }
     case 'GET_ORDERBYID_SUCCESS' : return{
      ...state ,
      loading : false,
      order : action.payload
  }
  case 'GET_ORDERBYID_FAILED' : return{
      ...state ,
      loading : false,
      error : true
  }
  default : return state
 }



}



export const getAllOrdersReducer =(state={orders : []} , action)=>{


 switch(action.type)
 {
     case 'GET_ALLORDERS_REQUEST' : return{
         ...state ,
         loading : true
     }
     case 'GET_ALLORDERS_SUCCESS' : return{
      ...state ,
      loading : false,
      orders : action.payload
  }
  case 'GET_ALLORDERS_FAILED' : return{
      ...state ,
      loading : false,
      error : true
  }
  default : return state
 }
}
export const updateOrderReducer = (state={} , action)=>{
        
    switch(action.type)
    {
    case 'UPDATE_ORDER_REQUEST' : return {
        ...state ,
        updateloading : true
    }
    case 'UPDATE_ORDER_SUCCESS' : return {
        ...state ,
        updateloading : false , 
        success : true
    }
    case 'UPDATE_ORDER_FAILED' : return {
        ...state ,
        updateloading : false,
        updateerror : action.payload
    }
    
    default : return state
    }
    
}
export const updatebyOrderReducer = (state={} , action)=>{
        
    switch(action.type)
    {
    case 'UPDATE_ORDERBY_REQUEST' : return {
        ...state ,
        updateloading : true
    }
    case 'UPDATE_ORDERBY_SUCCESS' : return {
        ...state ,
        updateloading : false , 
        success : true
    }
    case 'UPDATE_ORDERBY_FAILED' : return {
        ...state ,
        updateloading : false,
        updateerror : action.payload
    }
    
    default : return state
    }
    
}