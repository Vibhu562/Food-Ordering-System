export const registerNewTableReducer = (state ={} , action )=>{
    
    switch(action.type)
    {
        case 'TABLE_REGISTER_REQUEST' : return {
            ...state , 
            loading : true
        }
        case 'TABLE_REGISTER_SUCCESS' : return {
            ...state , 
            loading : false ,
            success : true
        }
        case 'TABLE_REGISTER_FAILED' : return {
            ...state , 
            loading : true ,
            error : 'TABLE Already Register'
        }
        default : return state 
    }
}

export const updateTableReducer = (state ={} , action )=>{

    switch(action.type)
    {
        case 'TABLE_UPDATE_REQUEST' : return {
            ...state , 
            loading : true
        }
        case 'TABLE_UPDATE_SUCCESS' : return {
            ...state , 
            loading : false ,
            success : true
        }
        case 'TABLE_UPDATE_FAILED' : return {
            ...state , 
            loading : false ,
            error : 'Table Already Register'
        }
        default : return state 
    }
}

export const getAllTablesReducer = (state={tables : []} , action)=>{

    switch(action.type)
    {
      case 'GET_ALLTABLES_REQUEST' : return {
          ...state ,
          loading : true
      }
      case 'GET_ALLTABLES_SUCCESS' : return {
          ...state ,
          loading : false , 
          tables : action.payload
      }
      case 'GET_ALLTABLES_FAILED' : return {
          ...state ,
          loading : false,
          error : action.payload
      }
  
      default : return state
    }
  
  }
  export const getTableByIdReducer=(state={table : {}} ,action)=>{
    switch(action.type)
    {
      case 'GET_TABLEBYID_REQUEST' : return {
          loading : true
      }
      case 'GET_TABLEBYID_SUCCESS' : return{
          table : action.payload,
          loading : false
      }
      case 'GET_TABLEBYID_FAILED' : return{
          error : action.payload,
          loading : false
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

  export const deleteTableReducer = (state={} , action)=>{

    switch(action.type)
    {
      case 'DELETE_TABLES_REQUEST' : return {
          ...state ,
          loading : true
      }
      case 'DELETE_TABLES_SUCCESS' : return {
          ...state ,
          loading : false , 
          success : true
      }
      case 'DELETE_TABLES_FAILED' : return {
          ...state ,
          loading : false,
          error : action.payload
      }
  
      default : return state
    }
  
  }

  export const getTablesByUserIdReducer =(state={} , action)=>{


    switch(action.type)
    {
        case 'GET_TABLESBYUSERID_REQUEST' : return{
            ...state ,
            loading : true
        }
        case 'GET_TABLESBYUSERID_SUCCESS' : return{
         ...state ,
         loading : false,
         tables : action.payload
     }
     case 'GET_TABLESBYUSERID_FAILED' : return{
         ...state ,
         loading : false,
         error : true
     }
     default : return state
    }
   
   
   
   }