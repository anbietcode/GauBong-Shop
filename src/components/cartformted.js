import React from 'react'
import ToastTed from './toastbuyted';

const cartformted = () => {


    return (
        <div>
            <button type="button" class="btn btn-success m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <strong>Buy Now</strong>

            </button>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel"><i class="bi bi-paypal"></i> Payment</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" style={{fontWeight: "bold"}}>
                            <div>
                                <div class="mb-3" >
                                    <label for="exampleFormControlInput1" class="form-label"><i class="bi bi-person-fill"></i> Full Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter name here" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label"><i class="bi bi-envelope"></i> Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label"><i class="bi bi-flag-fill"></i> Choose your country: </label>
                                    <select id="cars" name="carlist" form="carform" style={{ marginLeft: 10 + 'px' }}>
                                        <option value="VietNam">VietNam</option>
                                        <option value="United State American">United State American</option>
                                        <option value="ThaiLand">ThaiLand</option>
                                        <option value="Singapore">Singapore</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label"><i class="bi bi-house-door-fill"></i> Address</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label"><i class="bi bi-telephone-fill"></i> Phone Number</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="enter phone number here" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label"><i class="bi bi-credit-card-2-back-fill"></i> Credit card number</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="enter phone number here" />
                                </div>
                                <div class="list-group">
                                    <div class="list-group-item">
                                        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                                        <label class="form-check-label" for="firstCheckbox"> Accept All</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <ToastTed/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cartformted
