import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

function Checkout() {
    const [{ basket }] = useStateValue();
    //Dispatch is only used when have to manipulate the basket ( add or remove from the basket).
    return(
        <div className="checkout">
                   <img 
                   className="checkout_ad"
                   src=""
                   alt=""
                   />
                   {basket?.length === 0 ? (
                       <div>
                           <h2> Shopping Basket is Empty.</h2>
                        </div>
                   ) : (
                    <div>
                        <h2 className="checkout__title">Your shopping basket</h2>
                        {/*Checkout all the products */}
                        {basket.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />

                        ))}
                        
                    </div>
                   )}
        </div>
    )
}

export default Checkout;