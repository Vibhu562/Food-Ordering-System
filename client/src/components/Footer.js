import React from 'react'
import NewsletterFrom from './News/NewsletterForm'
export default function Footer() {
  return (
    <div className='hello responsive'>
<div class="container my- ">

    <footer class="text-center text-lg-start  mt-xl-5 pt-4">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 class="text-uppercase mb-4" style ={{color :'white'}}>OUR WORLD</h5>

          <ul class="list-unstyled mb-4">
            <li>
              <a href="#!" class="text-white">About us</a>
            </li>
            <li>
              <a href="#!" class="text-white">Collections</a>
            </li>
            <li>
              <a href="#!" class="text-white">Environmental philosophy</a>
            </li>
            <li>
              <a href="#!" class="text-white">Artist collaborations</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 class="text-uppercase mb-4" style ={{color :'white'}}>Assistance</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-white">Contact us</a>
            </li>
            <li>
              <a href="#!" class="text-white">Size Guide</a>
            </li>
            <li>
              <a href="#!" class="text-white">Shipping Information</a>
            </li>
            <li>
              <a href="#!" class="text-white">Returns & Exchanges</a>
            </li>
            <li>
              <a href="#!" class="text-white">Payment</a>
            </li>
          </ul>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h5 class="text-uppercase mb-4"  style ={{color :'white'}}>Careers</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-white">Jobs</a>
            </li>
          </ul>
        </div>
      
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0 justify-content-center">
          <h5 class="text-uppercase mb-4"  style ={{color :'white'}}>Subscribe</h5>
          <div class="form-outline form-white mb-4">
          <NewsletterFrom/>
          </div>
        </div>
      </div>
    </div>

    
  </footer>
  
</div>

    </div>
  )
}
