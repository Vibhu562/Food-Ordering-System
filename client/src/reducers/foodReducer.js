export const getAllFoodsReducer=(state={foods : []} ,action)=>{
    switch(action.type)
    {
        case 'GET_FOODS_REQUEST' : return {
            loading : true
        }
        case 'GET_FOODS_SUCCESS' : return{
            foods : action.payload,
            loading : false
        }
        case 'GET_FOODS_FAILED' : return{
            error : action.payload,
            loading : false
        }
        default : return state
    }
  }

  export const addFoodReducer = (state={} , action)=>{

    switch(action.type)
    {
    case 'ADD_FOOD_REQUEST' : return {
        ...state ,
        loading : true
    }
    case 'ADD_FOOD_SUCCESS' : return {
        ...state ,
        loading : false , 
        success : true
    }
    case 'ADD_FOOD_FAILED' : return {
        ...state ,
        loading : false,
        error : action.payload
    }
    
    default : return state
    }
    
    }

export const getFoodByIdReducer=(state={food : {}} ,action)=>{
        switch(action.type)
        {
          case 'GET_FOODBYID_REQUEST' : return {
              loading : true
          }
          case 'GET_FOODBYID_SUCCESS' : return{
              food : action.payload,
              loading : false
          }
          case 'GET_FOODBYID_FAILED' : return{
              error : action.payload,
              loading : false
          }
          default : return state
        }
        }
        

        
export const deleteFoodReducer = (state={} , action)=>{
        
        switch(action.type)
        {
        case 'DELETE_FOODS_REQUEST' : return {
            ...state ,
            loading : true
        }
        case 'DELETE_FOOD_SUCCESS' : return {
            ...state ,
            loading : false , 
            success : true
        }
        case 'DELETE_FOOD_FAILED' : return {
            ...state ,
            loading : false,
            error : action.payload
        }
        
        default : return state
        }
        
        }
        

        
export const updateFoodReducer = (state={} , action)=>{
        
        switch(action.type)
        {
        case 'UPDATE_FOOD_REQUEST' : return {
            ...state ,
            updateloading : true
        }
        case 'UPDATE_FOOD_SUCCESS' : return {
            ...state ,
            updateloading : false , 
            success : true
        }
        case 'UPDATE_FOOD_FAILED' : return {
            ...state ,
            updateloading : false,
            updateerror : action.payload
        }
        
        default : return state
        }
        
  }
  export const addFoodReviewReducer=(state={},action)=>{
    switch(action.type)
    {
       case 'ADD_FOOD_REVIEW_REQUEST' : return {
           loading : true
       }
       case 'ADD_FOOD_REVIEW_SUCCESS' : return {
          loading : false,
          success : true
      }
      case 'ADD_FOOD_REVIEW_FAILED' : return {
          loading : false,
          error:true
      }
      default : return state
    }
    
}