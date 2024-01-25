import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
            {/* checkout left   */}
            <div className='checkout__left'> 
                <img className='checkout_ad'
                src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/57Sp/image/QXisjvOnjRQw4wRRBsVsJD_eXbw" 
                />

                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>

                    {/* Basket item */}
                    {/* Basket item */}
                    {/* Basket item */}
                </div>

            </div>
            
            {/* checkout right */}
            <div className='checkout__right'>
                <Subtotal />
                <h2>Subtotal will go here</h2>
            </div>
        
            
    </div>
  )
}

export default Checkout
