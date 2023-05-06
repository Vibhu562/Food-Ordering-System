export const getAllRestaurantsReducer=(state={restaurants : []} ,action)=>{
    switch(action.type)
    {
        case 'GET_RESTAURANTS_REQUEST' : return {
            loading : true
        }
        case 'GET_RESTAURANTS_SUCCESS' : return{
            restaurants : action.payload,
            loading : false
        }
        case 'GET_RESTAURANTS_FAILED' : return{
            error : action.payload,
            loading : false
        }
        default : return state
    }
  }

  export const addRestaurantReducer = (state={} , action)=>{

    switch(action.type)
    {
    case 'ADD_RESTAURANT_REQUEST' : return {
        ...state ,
        loading : true
    }
    case 'ADD_RESTAURANT_SUCCESS' : return {
        ...state ,
        loading : false , 
        success : true
    }
    case 'ADD_RESTAURANT_FAILED' : return {
        ...state ,
        loading : false,
        error : action.payload
    }
    
    default : return state
    }
    
    }

export const getRestaurantByIdReducer=(state={restaurant : {}} ,action)=>{
        switch(action.type)
        {
          case 'GET_RESTAURANTBYID_REQUEST' : return {
              loading : true
          }
          case 'GET_RESTAURANTBYID_SUCCESS' : return{
              restaurant : action.payload,
              loading : false
          }
          case 'GET_RESTAURANTBYID_FAILED' : return{
              error : action.payload,
              loading : false
          }
          default : return state
        }
        }
        

        
export const deleteRestaurantReducer = (state={} , action)=>{
        
        switch(action.type)
        {
        case 'DELETE_RESTAURANTS_REQUEST' : return {
            ...state ,
            loading : true
        }
        case 'DELETE_RESTAURANT_SUCCESS' : return {
            ...state ,
            loading : false , 
            success : true
        }
        case 'DELETE_RESTAURANT_FAILED' : return {
            ...state ,
            loading : false,
            error : action.payload
        }
        
        default : return state
        }
        
        }
        

        
export const updateRestaurantReducer = (state={} , action)=>{
        
        switch(action.type)
        {
        case 'UPDATE_RESTAURANT_REQUEST' : return {
            ...state ,
            updateloading : true
        }
        case 'UPDATE_RESTAURANT_SUCCESS' : return {
            ...state ,
            updateloading : false , 
            success : true
        }
        case 'UPDATE_RESTAURANT_FAILED' : return {
            ...state ,
            updateloading : false,
            updateerror : action.payload
        }
        
        default : return state
        }
        
        }

        export const addRestaurantReviewReducer=(state={},action)=>{
            switch(action.type)
            {
               case 'ADD_RESTAURANT_REVIEW_REQUEST' : return {
                   loading : true
               }
               case 'ADD_RESTAURANT_REVIEW_SUCCESS' : return {
                  loading : false,
                  success : true
              }
              case 'ADD_RESTAURANT_REVIEW_FAILED' : return {
                  loading : false,
                  error:true
              }
              default : return state
            }
            
}