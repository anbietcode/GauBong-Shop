import React from 'react';

const Footer = (props) => {
    return(
        <div>
                 <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>GAUBONG SHOP</h6>
            <p class="text-justify">With GAUBONG, you can create memorable memories and make the day of you and your loved ones even more special. 
            Our stuffed animals are not only adorable decorations but also great companions in everyday life. 
            From decorating the bedroom and living room to giving gifts to loved ones, 
            we believe that GAUBONG will be a source of inspiration not to be missed. 
            Join our exciting adventure and explore the adorable world of stuffed animals at GAUBONG today!</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Collection</h6>
            <ul class="footer-links">
              <li><a href="teddybear" style={{textDecoration:"none"}}>TeddyBear</a></li>
              <li><a href="bunnies" style={{textDecoration:"none"}}>Bunnies</a></li>
              <li><a href="cat" style={{textDecoration:"none"}}>Cat</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links" >
              <li><a href="about" style={{textDecoration:"none"}}>About Us</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">&copy;Copyright Gaubong Limited 2024 All rights reserved
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="bi bi-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="bi bi-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="bi bi-instagram"></i></a></li>
              <li><a class="linkedin" href="#"><i class="bi bi-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
        </div>
    )
}
export default Footer;