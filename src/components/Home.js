import React from 'react';
import './header.css';
import BasicRating from './BasicRating';
import SimpleSnackbar from './SimpleSnackbar';



const Home = (props) => {
    return(
        <div className='bg-home'>
            <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={require("./Banner01.png")} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={require("./Banner02.png")} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={require("./Banner03.png")} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={require("./Banner04.png")} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            <div>
                <img src={require("./quote.jpeg")} class="d-block w-100" alt="..."/>
            </div>
            <div>
                <h2 className="title1 shadow-lg mb-5"><strong>Teddy Bear</strong></h2>
            </div>

            <div className="container ">
                <div className="row">
                    <div className="col-md-3">
                    <div class="card" style={{width: 16 + 'rem'}}>
                    <img src={require("./gau1.png")} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h3> <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">Best Seller</span></h3>
                        <h5 class="card-title">Bartholomew Bear
                            </h5>
                        <p class="card-text"><strong>$3000</strong></p>
                        <a href="#" class="btn btn-warning">Collection &#10140;</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div class="card" style={{width: 16 + 'rem'}}>
                    <img src={require("./gau2.png")} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Bedtime Bear</h5>
                        <p class="card-text"><strong>$4200</strong></p>
                        <a href="#" class="btn btn-warning">Collection &#10140;</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div class="card" style={{width: 16 + 'rem'}}>
                    <img src={require("./gau3.png")} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Harvey Bear</h5>
                        <p class="card-text"><strong>$17500</strong></p>
                        <a href="#" class="btn btn-warning">Collection &#10140;</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div class="card" style={{width: 16 + 'rem'}}>
                    <img src={require("./gau4.png")} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Knox Bear</h5>
                        <p class="card-text"><strong>$5400</strong></p>
                        <a href="#" class="btn btn-warning">Collection &#10140;</a>
                    </div>
                    </div>
                    </div>
                    
            </div>
        </div>
        <div>
        <img  className='bannerdown' src={require("./bannerdown.jpeg")}/>
        </div>
        <div>
                <h2 className="title1 shadow-lg mb-5"><strong>Bunnies</strong></h2>
        </div>
        <div className="container cardbunny">
                <div className="row" >
                    <div className="col-md-3">
                    <div class="card" style={{width: 16 + 'rem'}}>
                    <img src={require("./card9.png")} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Stardust Bunny</h5>
                        <p class="card-text"><strong>$3000</strong></p>
                        <a href="#" class="btn btn-warning">Collection &#10140;</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div class="card" style={{width: 16 + 'rem'}}>
                    <img src={require("./card2.png")} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Luxe Bunny Willow</h5>
                        <p class="card-text"><strong>$4000</strong></p>
                        <a href="#" class="btn btn-warning">Collection &#10140;</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div class="card" style={{width: 16 + 'rem'}}>
                    <img src={require("./card3.png")} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Viola Bunny</h5>
                        <p class="card-text"><strong>$3000</strong></p>
                        <a href="#" class="btn btn-warning">Collection &#10140;</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div class="card" style={{width: 16 + 'rem'}}>
                    <img src={require("./card10.png")} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Hot Pink Bunny</h5>
                        <p class="card-text"><strong>$3000</strong></p>
                        <a href="#" class="btn btn-warning">Collection &#10140;</a>
                    </div>
                    </div>
                    </div>
                    
            </div>
            <br/>
            <hr/>
            <h2 className='OPtext'><strong><i class="bi bi-star-fill"></i> Opinions and reviews</strong></h2>
            <div>
                <form>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"><strong>Username:</strong></label>
                        <input type="text" class="form-control shadow mb-5" id="exampleFormControlInput1" placeholder="Write your username here..."/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label"><strong>Comment:</strong></label>
                        <textarea class="form-control shadow mb-5" id="exampleFormControlTextarea1" rows="2" placeholder="Write your comment here..."></textarea>
                        <BasicRating/>
                    </div>
                    <SimpleSnackbar/>
                   
                </form>
                <hr/>
                </div>
               
        </div>
       
     </div>  
     

    )
}
export default Home;