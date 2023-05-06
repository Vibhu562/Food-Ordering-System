import React, {  useState } from "react";
import {  useSelector } from "react-redux";
import { PayPalButtons } from "@paypal/react-paypal-js";


export default function PaypalCheckoutButton() {
  
  const cartreducerstate = useSelector((state) => state.cartReducer);
  const { cartItems } = cartreducerstate;
  var subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity) , 0)

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const handleApprove = (orderID) => {

    // Call backend function to fulfill order
   
    
    // if response is success

    setPaidFor(true);
    // Refresh user's account or subscription status
    // if response is error
    // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
  };
  if (paidFor) {
    // Display success message, modal or redirect user to success page
    //alert("Thank you for your purchase!");
  }  
  if (error) {
    // Display error message, modal or redirect user to error page
    alert(error);
  }
  function tokenHandler(token){
    console.log(token)
         
  }
  return (
    <PayPalButtons 
    
    style={{
      color: "silver",
      layout: "horizontal",
      height: 48,
      tagline: false,
      shape: "pill"
    }}
    onClick={(data, actions) => {
      // Validate on button click, client or server side
      const hasAlreadyBoughtCourse = false;
    
      if (hasAlreadyBoughtCourse) {
        setError(
          "You already bought this course. Go to your account to view your list of courses."
        );
    
        return actions.reject();
      } else {
        return actions.resolve();
      }
    }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "All",
              amount: {
                value: parseInt(subtotal)
              }
            }
          ]
        });
      }}
      onApprove= {async(data, actions) => {
        const order = await actions.order.capture(); 
        console.log("order", order);
        handleApprove(data.orderID);
        console.log(data.orderID);
        
        alert("Payment successful , your order will be delivered within 30 mins" + data.orderID);
       
       
      }}
      onCancel={() => {
        // Display cancel message, modal or redirect user to cancel page or back to cart
      }}
      onError={(err) => {
        setError(err);
        console.error("PayPal Checkout onError", err);
      }}
      />
  );
}
