import {combineReducers }from 'redux';
import {updatebyOrderReducer, updateOrderReducer,deleteOrderReducer,placeOrderReducer ,getOrdersByUserIdReducer,getOrderByIdReducer,getAllOrdersReducer} from './reducers/orderReducer';
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducer';
import {getAllRestaurantsReducer,addRestaurantReducer,updateRestaurantReducer} from './reducers/restaurantReducer';
import {deleteRestaurantReducer,getRestaurantByIdReducer,addRestaurantReviewReducer} from './reducers/restaurantReducer';
import {registerNewUserReducer} from './reducers/userReducer'
import {getTablesByUserIdReducer,registerNewTableReducer,updateTableReducer,getAllTablesReducer,deleteTableReducer,getTableByIdReducer} from './reducers/tableReducer'
import {addFoodReviewReducer, updateFoodReducer,getAllFoodsReducer,addFoodReducer,getFoodByIdReducer,deleteFoodReducer} from './reducers/foodReducer';
import {loginReducer  ,updateReducer , getAllUsersReducer, deleteUserReducer} from './reducers/userReducer'
import { deleteComplaintReducer,registerNewComplaintReducer,updateComplaintReducer,getAllComplaintsReducer,getComplaintByIdReducer,getComplaintsByUserIdReducer } from './reducers/complaintReducer';
import { registerNewFeedbackReducer,deleteFeedbackReducer,updateFeedbackReducer,getAllFeedbacksReducer,getFeedbacksByUserIdReducer,getFeedbackByIdReducer } from './reducers/feedbackReducer';
const finalReducer = combineReducers({
  updatebyOrderReducer:updatebyOrderReducer,
  registerNewFeedbackReducer:registerNewFeedbackReducer,
  updateFeedbackReducer:updateFeedbackReducer,
  deleteFeedbackReducer:deleteFeedbackReducer,
  getAllFeedbacksReducer:getAllFeedbacksReducer,
  getFeedbackByIdReducer:getFeedbackByIdReducer,
  getFeedbacksByUserIdReducer:getFeedbacksByUserIdReducer,
  deleteComplaintReducer :deleteComplaintReducer,
  registerNewComplaintReducer : registerNewComplaintReducer ,
  updateComplaintReducer : updateComplaintReducer,
  getAllComplaintsReducer : getAllComplaintsReducer,
  getComplaintByIdReducer : getComplaintByIdReducer,
  getComplaintsByUserIdReducer:getComplaintsByUserIdReducer,
  getAllTablesReducer:getAllTablesReducer,
  addFoodReviewReducer: addFoodReviewReducer,
  getTablesByUserIdReducer:getTablesByUserIdReducer,
  getTableByIdReducer:getTableByIdReducer,
  deleteTableReducer:deleteTableReducer,
  updateTableReducer:updateTableReducer,
  registerNewTableReducer:registerNewTableReducer,
  updateOrderReducer:updateOrderReducer,
  getAllOrdersReducer:getAllOrdersReducer, 
  placeOrderReducer:placeOrderReducer,
  getOrdersByUserIdReducer:getOrdersByUserIdReducer,
  getOrderByIdReducer:getOrderByIdReducer,
  deleteOrderReducer : deleteOrderReducer,
  getRestaurantByIdReducer:getRestaurantByIdReducer,
  getAllFoodsReducer: getAllFoodsReducer,
  addFoodReducer:addFoodReducer,
  getFoodByIdReducer:getFoodByIdReducer,
  deleteFoodReducer:deleteFoodReducer,
  updateFoodReducer:updateFoodReducer,
  getAllRestaurantsReducer : getAllRestaurantsReducer ,
  addRestaurantReducer :addRestaurantReducer,
  updateRestaurantReducer:updateRestaurantReducer,
  deleteRestaurantReducer:deleteRestaurantReducer,
  cartReducer : cartReducer ,
  registerNewUserReducer : registerNewUserReducer,
  loginReducer : loginReducer ,
  updateReducer : updateReducer,
  getAllUsersReducer : getAllUsersReducer,
  deleteUserReducer : deleteUserReducer,
  addRestaurantReviewReducer : addRestaurantReviewReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : []

const initialState = {
  cartReducer : {cartItems : cartItems},
  loginReducer : {currentUser : currentUser}
}

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

const store = createStore(finalReducer , initialState, composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  ))
 export default store 