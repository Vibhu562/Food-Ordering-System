import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch , useSelector} from 'react-redux'
import { placeOrder } from '../../actions/orderActions'
import Loader from '../../components/others/Loader'
import Error from '../../components/others/Error'
import Success from '../../components/others/Success'
export default function Checkout({amount,restaurantemail}) {
    const dispatch = useDispatch()
    const orderstate = useSelector(state=>state.placeOrderReducer)

    const getrestaurantbyidstate = useSelector( state => state.getRestaurantByIdReducer );
    const { restaurant } = getrestaurantbyidstate;

    
    const { loading , success , error } = orderstate
    function tokenHandler(token)
    {
         console.log(token);
         dispatch(placeOrder(token , amount , restaurantemail))
    }

    function validate()
    {
        if(!localStorage.getItem('currentUser'))
        {
             window.location.href ='/login'
        }
    }
  return (
    <div>
        {loading && (<Loader/>)}
            {error && (<Error error='Something went wrong'/>)}
            {success && (<Success success='Your Order Placed Successfully'/>)}

    <StripeCheckout
    token={tokenHandler}
    amount={amount*100}
    shippingAddress
    currency='INR'
    stripeKey='pk_test_51JXN8ASGX65UtClKQM1qR2CE17v2qSIK3mvU2Mt2nG04vFt2s32pxb7Vj5I8W278pXK92l3D5rZV45XFa1JYgKO900q1RZSIe3'
    >
    <button className="btn btn-primary" onClick={validate}>PAY NOW</button>
    </StripeCheckout>

</div>
  )
}
