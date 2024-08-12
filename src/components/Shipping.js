import React from 'react'
import Step from './step'

const Shipping = () => {
    return (
        <div>
            <div className='containershipping bg-dark'>
                <div className='row1'>
                    <div class="card col-md-4 shadow" style={{ width: 55 + 'rem', height: 42 + 'rem',marginTop: 15 + 'px' }}>
                        <div class="card-body bg-white">
                            <h5 class="card-title">Client Sarah Lezito</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Order #099966877</h6>
                            <br />
                            <Step />
                            <br />
                            <img className="shadow" style={{ width: 45 + 'rem', height: 18 + 'rem', marginLeft: 40 + 'px' }} src={require("./shipping.jpeg")} class="card-img-top" alt="..." />
                            <br />
                            <img className="shadow" style={{ width: 40 + 'rem', height: 9 + 'rem', marginTop: 13 + 'px', marginLeft: 40 + 'px' }} src={require("./packagedetail.jpeg")} class="card-img-top" alt="..." />
                        </div>
                    </div>

                    <div class="card col-md-4 shadow " style={{ width: 20 + 'rem', height: 42 + 'rem' , marginLeft: 10 + 'px', marginTop: 15 + 'px'}}>
                        <div class="card-body bg-white">
                            <h5 class="card-title">Truck Detail <i class="bi bi-pencil-square sympen"></i></h5>
                            <h6 class="card-subtitle mb-2 text-warning" >Recommend</h6><br />
                            <img className="shadow" style={{ width: 16 + 'rem', height: 9 + 'rem', marginTop: 13 + 'px' }} src={require("./truckship.jpeg")} class="card-img-top" alt="..." />
                            <hr />
                            <div className='infotruck'>
                                <h6 class="card-subtitle mb-2 text-body-secondary" >Truck Type<p className='bienso border border-black'>AB 99999</p></h6>
                                <h5 class="card-title">Gaubong Truck</h5>
                            </div>
                            <div className='infotruck'>
                                <h6 class="card-subtitle mb-2 text-body-secondary" >Truck capacity<p ><strong>20 tons</strong></p></h6>
                            </div>
                            <div>
                                <div class="progress-stacked">
                                    <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{ width: 75 + '%' }}>
                                        <div class="progress-bar bg-danger"></div>
                                    </div>
                                    <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ width: 25 + '%' }}>
                                        <div class="progress-bar bg-success"></div>
                                    </div>
                                </div>
                                <p className='phantram'>75%</p>
                            </div>
                            <div>
                                <hr style={{ marginTop: 45 + 'px' }} />
                                <img className="shadow" style={{ width: 16 + 'rem', height: 5 + 'rem', marginTop: 13 + 'px' }} src={require("./notecard.png")} class="card-img-top" alt="..." />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shipping