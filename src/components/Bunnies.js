import React from "react";
import BunHome from "./BunHome";
import Cart1 from "./Cart1";
import {CartProvider} from "react-use-cart";

function Bunnies  () {
    return(
        <div className="bodyTed">
        <CartProvider>
            <BunHome/>
            <Cart1 />
        </CartProvider>
        </div>
        
    );
}

export default Bunnies;