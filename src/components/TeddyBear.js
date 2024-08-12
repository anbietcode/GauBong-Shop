import React from "react";
import TedHome from "./TedHome";
import Cart from "./Cart";
import {CartProvider} from "react-use-cart";

function TeddyBear  () {
    return(
        <div className="bodyTed">
        <CartProvider>
            <TedHome/>
            <Cart />
        </CartProvider>
        </div>
        
    );
}

export default TeddyBear;