export const registerNewComplaintReducer = (state ={} , action )=>{
    
    switch(action.type)
    {
        case 'COMPLAINT_REGISTER_REQUEST' : return {
            ...state , 
            loading : true
        }
        case 'COMPLAINT_REGISTER_SUCCESS' : return {
            ...state , 
            loading : false ,
            success : true
        }
        case 'COMPLAINT_REGISTER_FAILED' : return {
            ...state , 
            loading : true ,
            error : 'COMPLAINT Already Registered'
        }
        default : return state 
    }
}

export const updateComplaintReducer = (state ={} , action )=>{

    switch(action.type)
    {
        case 'COMPLAINT_UPDATE_REQUEST' : return {
            ...state , 
            loading : true
        }
        case 'COMPLAINT_UPDATE_SUCCESS' : return {
            ...state , 
            loading : false ,
            success : true
        }
        case 'COMPLAINT_UPDATE_FAILED' : return {
            ...state , 
            loading : false ,
            error : 'Complaint Already Register'
        }
        default : return state 
    }
}

export const getAllComplaintsReducer = (state={complaints : []} , action)=>{

    switch(action.type)
    {
      case 'GET_ALLCOMPLAINTS_REQUEST' : return {
          ...state ,
          loading : true
      }
      case 'GET_ALLCOMPLAINTS_SUCCESS' : return {
          ...state ,
          loading : false , 
          complaints : action.payload
      }
      case 'GET_ALLCOMPLAINTS_FAILED' : return {
          ...state ,
          loading : false,
          error : action.payload
      }
  
      default : return state
    }
  
  }
  export const getComplaintByIdReducer=(state={complaint : {}} ,action)=>{
    switch(action.type)
    {
      case 'GET_COMPLAINTBYID_REQUEST' : return {
          loading : true
      }
      case 'GET_COMPLAINTBYID_SUCCESS' : return{
          complaint : action.payload,
          loading : false
      }
      case 'GET_COMPLAINTBYID_FAILED' : return{
          error : action.payload,
          loading : false
      }
      default : return state
    }
    }
    export const deleteComplaintReducer = (state={} , action)=>{

    switch(action.type)
    {
    case 'DELETE_COMPLAINTS_REQUEST' : return {
        ...state ,
        loading : true
    }
    case 'DELETE_COMPLAINT_SUCCESS' : return {
        ...state ,
        loading : false , 
        success : true
    }
    case 'DELETE_COMPLAINT_FAILED' : return {
        ...state ,
        loading : false,
        error : action.payload
    }
    
    default : return state
    }
    
    }

 

  export const getComplaintsByUserIdReducer =(state={} , action)=>{


    switch(action.type)
    {
        case 'GET_COMPLAINTSBYUSERID_REQUEST' : return{
            ...state ,
            loading : true
        }
        case 'GET_COMPLAINTSBYUSERID_SUCCESS' : return{
         ...state ,
         loading : false,
         complaints : action.payload
     }
     case 'GET_COMPLAINTSBYUSERID_FAILED' : return{
         ...state ,
         loading : false,
         error : true
     }
     default : return state
    }
   
   
   
   }