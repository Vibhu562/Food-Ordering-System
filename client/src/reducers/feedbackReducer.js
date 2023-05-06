export const registerNewFeedbackReducer = (state ={} , action )=>{
    
    switch(action.type)
    {
        case 'FEEDBACK_REGISTER_REQUEST' : return {
            ...state , 
            loading : true
        }
        case 'FEEDBACK_REGISTER_SUCCESS' : return {
            ...state , 
            loading : false ,
            success : true
        }
        case 'FEEDBACK_REGISTER_FAILED' : return {
            ...state , 
            loading : true ,
            error : 'FEEDBACK Already Registered'
        }
        default : return state 
    }
}

export const updateFeedbackReducer = (state ={} , action )=>{

    switch(action.type)
    {
        case 'FEEDBACK_UPDATE_REQUEST' : return {
            ...state , 
            loading : true
        }
        case 'FEEDBACK_UPDATE_SUCCESS' : return {
            ...state , 
            loading : false ,
            success : true
        }
        case 'FEEDBACK_UPDATE_FAILED' : return {
            ...state , 
            loading : false ,
            error : 'FEEDBACK Already Register'
        }
        default : return state 
    }
}

export const getAllFeedbacksReducer = (state={feedbacks : []} , action)=>{

    switch(action.type)
    {
      case 'GET_ALLFEEDBACKS_REQUEST' : return {
          ...state ,
          loading : true
      }
      case 'GET_ALLFEEDBACKS_SUCCESS' : return {
          ...state ,
          loading : false , 
          feedbacks : action.payload
      }
      case 'GET_ALLFEEDBACKS_FAILED' : return {
          ...state ,
          loading : false,
          error : action.payload
      }
  
      default : return state
    }
  
  }
  export const getFeedbackByIdReducer=(state={feedback : {}} ,action)=>{
    switch(action.type)
    {
      case 'GET_FEEDBACKBYID_REQUEST' : return {
          loading : true
      }
      case 'GET_FEEDBACKBYID_SUCCESS' : return{
        feedback : action.payload,
          loading : false
      }
      case 'GET_FEEDBACKBYID_FAILED' : return{
          error : action.payload,
          loading : false
      }
      default : return state
    }
    }
    export const deleteFeedbackReducer = (state={} , action)=>{

    switch(action.type)
    {
    case 'DELETE_FEEDBACKS_REQUEST' : return {
        ...state ,
        loading : true
    }
    case 'DELETE_FEEDBACK_SUCCESS' : return {
        ...state ,
        loading : false , 
        success : true
    }
    case 'DELETE_FEEDBACK_FAILED' : return {
        ...state ,
        loading : false,
        error : action.payload
    }
    
    default : return state
    }
    
    }

 

  export const getFeedbacksByUserIdReducer =(state={} , action)=>{


    switch(action.type)
    {
        case 'GET_FEEDBACKSBYUSERID_REQUEST' : return{
            ...state ,
            loading : true
        }
        case 'GET_FEEDBACKSBYUSERID_SUCCESS' : return{
         ...state ,
         loading : false,
         feedbacks : action.payload
     }
     case 'GET_FEEDBACKSBYUSERID_FAILED' : return{
         ...state ,
         loading : false,
         error : true
     }
     default : return state
    }
   
   
   
   }