import React from "react";


function Dashboard() {
    return (
        <div className="bg">
            <div className="shadow ">
                <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Dashboard</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <i class="bi bi-bell-fill m-2" />
                        <i class="bi bi-envelope-fill m-2" />
                        <i class="bi bi-gear-fill m-2" />
                    </div>
                </nav>
            </div>
            <div className="container">
                <div className="row">
                    <div className="card1 col-md-2 ">
                        <div class="card bg1 shadow" style={{ width: 14 + 'rem', height: 7 + 'rem' }}>
                            <div class="card-body ">
                                <h6 class="card-title"><i class="bi bi-coin" /> Earnings</h6>
                                <h4 class="card-subtitle mb-2 text-white">$984.42</h4>
                                <h6 class="card-text">+$1120.9 than last month</h6>
                            </div>
                        </div>
                        <div className="container1 ">
                            <h5><strong>Revenue</strong></h5>
                            <img  className="shadow" style={{ width: 44 + 'rem', height: 20 + 'rem', borderRadius: 7 + 'px' }} src={require("./cardline2.png")} class="card-img-top" alt="..." />
                        </div>
                    </div>

                    <div className="card2 col-md-2">
                        <div class="card bg2 shadow" style={{ width: 14 + 'rem', height: 7 + 'rem' }}>
                            <div class="card-body ">
                                <h6 class="card-title"><i class="bi bi-cash-stack" /> Spending's</h6>
                                <h4 class="card-subtitle mb-2 text-white">$576.76</h4>
                                <h6 class="card-text">+$6.5 than last month</h6>
                            </div>
                        </div>
                    </div>

                    <div className=" card3 col-md-2">
                        <div class="card bg3 shadow" style={{ width: 14 + 'rem', height: 7 + 'rem' }}>
                            <div class="card-body ">
                                <h6 class="card-title"><i class="bi bi-wallet2" /> Saving</h6>
                                <h4 class="card-subtitle mb-2 text-white">$984.42</h4>
                                <h6 class="card-text">+$11.3 than last month</h6>
                            </div>
                        </div>
                    </div>

                    <div className=" card4 col-md-2">
                        <div class="card bg4 shadow" style={{ width: 18 + 'rem', height: 20 + 'rem' }}>
                            <div class="card-body ">
                                <h5 class="card-title"><strong>Card</strong><i class="bi bi-chevron-compact-left symcard" /><i class="bi bi-chevron-compact-right symcolor" /></h5>
                                <img src={require("./cardvisa.png")} class="card-img-top" alt="..." />
                                <div className="btn">
                                    <button
                                        type="button"
                                        color="primary"
                                        class="btn btn-success m-2 "
                                        style={{ backgroundColor: '#706fd3' }}
                                    ><i class="bi bi-arrow-up-right" /> Send</button>
                                    <button
                                        type="button"
                                        color="primary"
                                        class="btn btn-success m-2 "
                                        style={{ backgroundColor: '#706fd3' }}
                                    ><i class="bi bi-arrow-up-right" /> Request</button>
                                </div>
                            </div>
                            <div className="container2">
                                <div class="card shadow" style={{ width: 18 + 'rem', height: 11 + 'rem' }}>
                                    <div class="card-body">
                                        <h5 class="card-title"><strong>Quick Transitions</strong></h5>
                                        <img style={{ width: 40 + 'px', height: 40 + 'px', marginTop: 30 + 'px', marginRight: 12 + 'px' }} src={require("./add.png")} class="card-img-top" alt="add" />
                                        <img style={{ width: 40 + 'px', height: 40 + 'px', marginTop: 30 + 'px', marginRight: 12 + 'px' }} src={require("./pro1.png")} class="card-img-top" alt="..." />
                                        <img style={{ width: 40 + 'px', height: 40 + 'px', marginTop: 30 + 'px', marginRight: 12 + 'px' }} src={require("./pro2.png")} class="card-img-top" alt="..." />
                                        <img style={{ width: 40 + 'px', height: 40 + 'px', marginTop: 30 + 'px', marginRight: 12 + 'px' }} src={require("./pro3.png")} class="card-img-top" alt="..." />
                                        <img style={{ width: 40 + 'px', height: 40 + 'px', marginTop: 30 + 'px', marginRight: 1 + 'px' }} src={require("./pro4.png")} class="card-img-top" alt="..." />
                                        <div>
                                            <div className="namestory">
                                                <p>Add</p>
                                                <p>Lord</p>
                                                <p>Min</p>
                                                <p>Allil</p>
                                                <span>Lia</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Dashboard;