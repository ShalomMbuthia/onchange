//onchange is an event handler used primarily with form elements ie input textarea select and radio.triggersa function every time the value of the inputchanges

import React, {useState} from 'react';

function MyComponent(){

  const[name, setName] = useState("");
  const[quantity, setQuantity] = useState(1);
  const[comment, setComment] = useState("");
  const[payment, setPayment] = useState("");
  const[shipping, setShipping] = useState("Delivery");

  function handleNameChange(event){
    setName(event.target.value);
  }

    function handleQuantityChange(event){
      setQuantity(event.target.value);
    }
      
      function handleCommentChange(event){
        setComment(event.target.value);
  }
  function handlePaymentChange(event){
    setPayment(event.target.value);
}
function handleShippingChange(event){
  setShipping(event.target.value);
}


  return(
    <div>
      <input value={name} onChange={handleNameChange}/>
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number"/>
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"/>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="visa">Visa</option>
        <option value="mastercard">MasterCard</option>
        <option value="giftcard">GiftCard</option>
        

      </select>

      <p>Payment: {payment}</p>

      <label>
        <input type="radio" value="Pick up"
        checked={shipping === "Pick up"}
        onChange={handleShippingChange}/>
        Pick up
      </label><br/>
      <label>
      <input type="radio" value="Delivery"
        checked={shipping === "Delivery"}
        onChange={handleShippingChange}/>
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
    //onchange triggers a function every time the value of the input changes.It reflects a number that is changing
  );

}

export default MyComponent