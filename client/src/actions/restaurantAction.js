import axios from "axios";
export const getAllRestaurants = () => (dispatch) => {
    dispatch({ type: "GET_RESTAURANTS_REQUEST" });
  
    axios
      .get("/api/restaurants/getallrestaurants")
      .then((res) => {
        console.log(res);
  
        dispatch({ type: "GET_RESTAURANTS_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "GET_RESTAURANTS_FAILED", payload: err });
      });
  };
  export const addRestaurant =(restaurant)=> dispatch=>{

    dispatch({type:'ADD_RESTAURANT_REQUEST'})
  
    axios.post('/api/restaurants/addrestaurant' , {restaurant}).then(res=>{
      console.log(res);
      dispatch({type:'ADD_RESTAURANT_SUCCESS'})
      window.location.reload()
    }).catch(err=>{
      dispatch({type:'ADD_RESTAURANT_FAILED'})
    })
  
  }
  export const getRestaurantById = (restaurantid) => (dispatch) => {
    dispatch({ type: "GET_RESTAURANTBYID_REQUEST" });
  
    axios
      .post("/api/restaurants/getrestaurantbyid", { restaurantid })
      .then((res) => {
        console.log(res);
        dispatch({ type: "GET_RESTAURANTBYID_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "GET_RESTAURANTBYID_FAILED", payload: err });
      });
  };

  export const deleteRestaurant=(restaurantid)=>dispatch=>{
    dispatch({type:'DELETE_RESTAURANT_REQUEST'})
  
    axios.post('/api/restaurants/deleterestaurant' , {restaurantid}).then(res=>{
  
      dispatch({type:'DELETE_RESTAURANT_SUCCESS' , payload : res.data})
      alert('Restaurant deleted successfully')
      window.location.reload()
  
  
    }).catch(err=>{
      dispatch({type:'DELETE_RESTAURANT_FAILED' , payload : err})
  
    })
  
  
  }
  export const updateRestaurant =(restaurantid , updatedrestaurant)=> dispatch=>{

    dispatch({type:'UPDATE_RESTAURANT_REQUEST'})
  
    axios.post('/api/restaurants/updaterestaurant' , {restaurantid , updatedrestaurant}).then(res=>{
      console.log(res);
      dispatch({type:'UPDATE_RESTAURANT_SUCCESS'})
      
    }).catch(err=>{
      dispatch({type:'UPDATE_RESTAURANT_FAILED'})
  
    })}

    export const filterRestaurants = (searchkey, sortKey, description,location) => (dispatch) => {
      dispatch({ type: "GET_RESTAURANTS_REQUEST" });
    
      var filteredrestaurants;
      axios
        .get("/api/restaurants/getallrestaurants")
        .then((res) => {
          filteredrestaurants = res.data;
          if (searchkey) {
            filteredrestaurants = res.data.filter((restaurant) => {
              return restaurant.name.includes(searchkey);
            });
          }
    
          if (sortKey !== "popular") {
            if (sortKey === "htl") {
              filteredrestaurants = res.data.sort((a, b) => {
                return -a.rating + b.rating;
              });
            } else {
              filteredrestaurants = res.data.sort((a, b) => {
                return a.rating - b.rating;
              });
            }
          }
    
          if (description !== "all") {
            filteredrestaurants = res.data.filter((restaurant) => {
              return restaurant.description.toLowerCase().includes(description);
            });
          }
          if (location !== "all") {
            filteredrestaurants = res.data.filter((restaurant) => {
              return restaurant.location.toLowerCase().includes(location);
            });
          }
    
          dispatch({ type: "GET_RESTAURANTS_SUCCESS", payload: filteredrestaurants });
        })
        .catch((err) => {
          dispatch({ type: "GET_RESTAURANTS_FAILED" ,err});
        });
    };

    export const addRestaurantReview =(review , restaurantid)=>(dispatch , getState)=>{

      dispatch({type : "ADD_RESTAURANT_REVIEW_REQUEST"})
    
      const currentUser = getState().loginReducer.currentUser
      axios.post('/api/restaurants/addreview',{review , restaurantid, currentUser}).then(res=>{
        console.log(res)
    
        dispatch({type : "ADD_RESTAURANT_REVIEW_SUCCESS"})
        alert("Your review submitted Successfully")
        window.location.reload()
      }).catch((err) => {
        dispatch({ type: "ADD_RESTAURANT_REVIEW_FAILED" });
      });
    };