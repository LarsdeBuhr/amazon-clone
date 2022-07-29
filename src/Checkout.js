import userEvent from "@testing-library/user-event";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
   const [{ basket, user }, dispatch] = useStateValue();

   return (
      <div className="checkout">
         <div className="checkout__left">
            <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xz3K0Phi8j3altDbmF_MN1OF3HZe3y0hpQ&usqp=CAU"
               className="checkout__ad"
               alt="amazon banner"
            />

            <div>
            <h3>Hello, {user?.email}</h3>
               {basket.length > 0 ? <h2 className="checkout__title">Your shopping basket</h2>:<h2 className="checkout__title">You have no products in your shopping basket</h2> }

               {basket.map((item) => (
                  <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                  />
               ))}
            </div>
         </div>

         <div className="checkout__right">
            <Subtotal />
         </div>
      </div>
   );
}

export default Checkout;
