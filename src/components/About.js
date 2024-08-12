import React from 'react';

const About = (props) => {
    return(
        <div className='bg-home'>
            <div>
                <h2 className="title2"><strong>Our Story</strong></h2>
            </div>
            <div>
                <img src={require("./BannerAbout.png")} class="d-block w-100" alt="..."/>
            </div>
            <div>
                <h3 className='text-center p-5'><strong>Born in VIETNAM. Loved worldwide.</strong></h3>
                <p className='about-desc'>     
                For a quarter of a century, we have shared the joy of Gaubong toys with people of all ages, across<br/> 
                the globe. Over this time, our unmistakable characters have gained the affection of millions – <br/> 
                and center stage in many of the most prestigious stores across 77 countries. <br/> 
                <br/> Our designers play until something magical and unexpected happens – and a new character is <br/>  
                born! We source beautiful materials that are noticeably softer, subtler and long-lasting.<br/> 
                <br/> Our mission is to put a smile on your face. <a className='refdesc' href='homes'>Let's see if we can.</a><hr className='hrabout'/>
                </p>
            </div>
            <div>
                <img src={require("./QuoteABOUT.jpeg")} class="d-block w-100" alt="..."/><hr className='hrabout'/>
            </div>    
            <div>
                <img src={require("./BannerAbout.jpeg")} class="d-block w-100" alt="..."/>
            </div>
        </div>
    )
}
export default About;