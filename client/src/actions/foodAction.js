import axios from "axios";
export const getAllFoods = () => (dispatch) => {
    dispatch({ type: "GET_FOODS_REQUEST" });
  
    axios
      .get("/api/foods/getallfoods")
      .then((res) => {
        console.log(res);
        dispatch({ type: "GET_FOODS_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "GET_FOODS_FAILED", payload: err });
      });
  };
  
  export const filterFoods = (searchkey, sortKey,sortKeya, categoryabc,category,disease,vitamin,platter) => (dispatch) => {
    dispatch({ type: "GET_FOODS_REQUEST" });
    var filteredfoods;
    axios
      .get("/api/foods/getallfoods")
      .then((res) => {
        filteredfoods = res.data;
        if (searchkey) {
          filteredfoods = res.data.filter((food) => {
            return food.name.includes(searchkey);
            
          });
        }
  
        if (sortKey !== "popular") {
          if (sortKey === "htl") {
            filteredfoods = res.data.sort((a, b) => {
              return -a.price + b.price;
            });
          } else {
            filteredfoods = res.data.sort((a, b) => {
              return a.price - b.price;
            });
          }
        }
        if (sortKeya !== "popular") {
          if (sortKeya === "htl") {
            filteredfoods = res.data.sort((a, b) => {
              return -a.rating + b.rating;
            });
          } else {
            filteredfoods = res.data.sort((a, b) => {
              return a.rating - b.rating;
            });
          }
        }
        if (vitamin !== "all") {
          filteredfoods = res.data.filter((food) => {
            return food.vitamin.toLowerCase().includes(vitamin);
          });
        }
        if (categoryabc !== "Calories") {
          if (categoryabc === "htl") {
            filteredfoods = res.data.sort((a, b) => {
              return -a.calories + b.calories;
            });
          } else {
            filteredfoods = res.data.sort((a, b) => {
              return a.calories - b.calories;
            });
          }
        }

        if (category !== "all") {
          filteredfoods = res.data.filter((food) => {
            return food.category.toLowerCase().includes(category);
          });
        }
        if (disease !== "all") {
          filteredfoods = res.data.filter((food) => {
            return food.disease.toLowerCase().includes(disease);
          });
        }
        if (platter !== "all") {
          filteredfoods = res.data.filter((food) => {
            return food.platter.toLowerCase().includes(platter);
          });
        }
        dispatch({ type: "GET_FOODS_SUCCESS", payload: filteredfoods });
      })
      .catch((err) => {
        dispatch({ type: "GET_FOODS_FAILED" ,err});
      });
  };

  export const addFood =(food)=> dispatch=>{

    dispatch({type:'ADD_FOODS_REQUEST'})
  
    axios.post('/api/foods/addfood' , {food}).then(res=>{
      console.log(res);
      dispatch({type:'ADD_FOOD_SUCCESS'})
      window.location.reload()
    }).catch(err=>{
      dispatch({type:'ADD_FOOD_FAILED'})
    })
  
  }
  export const getFoodById = (foodid) => (dispatch) => {
    dispatch({ type: "GET_FOODSBYID_REQUEST" });
  
    axios
      .post("/api/foods/getfoodbyid", { foodid })
      .then((res) => {
        console.log(res);
  
        dispatch({ type: "GET_FOODBYID_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "GET_FOODBYID_FAILED", payload: err });
      });
  };
  export const deleteFood=(foodid)=>dispatch=>{
    dispatch({type:'DELETE_FOOD_REQUEST'})
  
    axios.post('/api/foods/deletefood' , {foodid}).then(res=>{
  
      dispatch({type:'DELETE_FOOD_SUCCESS' , payload : res.data})
      alert('Food Item deleted successfully')
      window.location.reload()
  
  
    }).catch(err=>{
      dispatch({type:'DELETE_FOOD_FAILED' , payload : err})
  
    })
  
  
  }
  export const updateFood =(foodid , updatedfood)=> dispatch=>{

    dispatch({type:'UPDATE_FOOD_REQUEST'})
  
    axios.post('/api/foods/updatefood' , {foodid , updatedfood}).then(res=>{
      console.log(res);
      dispatch({type:'UPDATE_FOOD_SUCCESS'})
      
    }).catch(err=>{
      dispatch({type:'UPDATE_FOOD_FAILED'})
  
    })
  };


  export const addFoodReview =(review , foodid)=>(dispatch , getState)=>{

    dispatch({type : "ADD_FOOD_REVIEW_REQUEST"})
  
    const currentUser = getState().loginReducer.currentUser
    axios.post('/api/foods/addreview',{review , foodid, currentUser}).then(res=>{
      console.log(res)
  
      dispatch({type : "ADD_FOOD_REVIEW_SUCCESS"})
      alert("Your review submitted Successfully")
      window.location.reload()
    }).catch((err) => {
      dispatch({ type: "ADD_FOOD_REVIEW_FAILED" });
    });
  };