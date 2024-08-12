import React from "react";
import { useCart } from "react-use-cart";
import DetailRating from ".//DetailRating";


const Itemcard = (props) => {
    const { addItem } = useCart();

    return (
        <div className="col-md-3 ">
            <div class="card" style={{ width: 16 + 'rem', marginBottom: 1 + 'cm' }}>
                <>
                    <h6 className="border border-warning p-2 mb-2 headingcard">Gaubong Shop</h6>
                </>
                <img src={props.img} class="card-img-top img-fluid" />
                <button className=" btn btn-outline-dark  "><i class="bi bi-heart"></i> Add To Wishlist</button>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5><hr />
                    <h5 class="card-text ">${props.price} </h5>
                    <button class="btn btn-warning"
                        onClick={() => addItem(props.item)}><strong>Add to Cart</strong></button>
                    <>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>DETAIL</strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <img className="detailimg" src={props.img} /><hr />
                                        <p>{props.desc}</p>
                                    </div>
                                    <DetailRating />
                                </div>
                            </div>
                        </div>
                    </>


                </div>

            </div>
        </div>

    );

};

export default Itemcard;