import React from 'react'
import { Row } from 'react-bootstrap';

const CounterAnimation = () => {
    $(document).ready(function() {

        $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
 
});  

  return (
    <div class="container">
    <hr />
        <Row>
            <h4 className='text-center mt-2'>
                <span className='product-color gap-3'><span className='logo-text'>CRYSTAL</span> Animal Hospital</span>
                <span className='gap-3 mt-2'>
                    <br />Our Performance
                </span>
            </h4>
        </Row>
        <div class="row counter_row gap-5 text-center ">

        <div class="four col-md-2 gap-2">
            <div class="counter-box colored">
                <i class="fa fa-thumbs-o-up"></i>
                <span class="counter">15</span>
                <p>Happy Customers</p>
            </div>
        </div>
        <div class="four col-md-2">
            <div class="counter-box">
                <i class="fa fa-group"></i>
                <span class="counter">25</span>
                <p>Members</p>
            </div>
        </div>
        <div class="four col-md-2">
            <div class="counter-box">
                <i class="fa  fa-trophy"></i>
                <span class="counter">289</span>
                <p>Treated Pets</p>
            </div>
        </div>
        <div class="four col-md-2">
            <div class="counter-box">
                <i class="fa  fa-user"></i>
                <span class="counter">5</span>
                <p>Doctors</p>
            </div>
        </div>
        </div>	
    <hr />
    </div>
  )
}

export default CounterAnimation