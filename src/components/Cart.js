import React from "react";
import { useCart } from "react-use-cart";
import CartForm from './cartformted';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return <h1 className="title1">Your Cart is Empty</h1>

    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12"><hr />
                    <h2 className="shadow" style={{ backgroundColor: "#192a56", color: "white", padding: 15 + 'px', borderRadius: 7 + 'px' }}><stong><i class="bi bi-cart4"></i> Shopping Cart</stong><h5 style={{ float: "right" }}>Total items ({totalItems}) </h5></h2><hr />
                    <table className="table table-bordered table-warning shadow "   >
                        <tbody >
                            <tr className="text-center">
                                <th>Product</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quanity</th>
                                <th>Action</th>
                            </tr>

                            {items.map((item, index) => {

                                return (
                                    <tr key={index} className="text-center">

                                        <td>
                                            <img src={item.img} style={{ height: '8rem', borderRadius: 7 + 'px' }} />
                                        </td>
                                        <td style={{paddingTop: 40 + 'px'}}><strong>{item.title}</strong></td>
                                        <td style={{paddingTop: 40 + 'px'}} className="text-danger"><strong>{item.price}</strong></td>
                                        <td style={{paddingTop: 40 + 'px'}} className="text-center text-success"><strong>{item.quantity}</strong> </td>
                                        <td style={{paddingTop: 40 + 'px'}}>
                                            <button
                                                className="btn btn-warning ms-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            ><i class="bi bi-dash-circle-fill"></i></button>
                                            <button
                                                className="btn btn-warning ms-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            ><i class="bi bi-plus-circle-fill" /></button>
                                            <button
                                                className="btn btn-danger ms-2"
                                                onClick={() => removeItem(item.id)}
                                            ><i class="bi bi-x-circle-fill"></i></button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2><strong>Total Price: ${cartTotal}</strong></h2>
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-danger m-1"
                        onClick={() => emptyCart()}
                    ><strong><i class="bi bi-trash3-fill"></i></strong></button>
                    <div style={{ float: "right" }}>
                        <CartForm />
                    </div>
                </div>
            </div>
        </section >
    );
};
export default Cart;