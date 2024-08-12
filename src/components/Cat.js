import React from "react";
import CatHome from "./CatHome";
import Cart2 from "./Cart2";
import {CartProvider} from "react-use-cart";

function Cat  () {
    return(
        <div className="bodyTed">
        <CartProvider>
            <CatHome/>
            <Cart2 />
        </CartProvider>
        </div>
        
    );
}

export default Cat;