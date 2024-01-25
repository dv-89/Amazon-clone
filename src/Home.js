import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__img'
                src="https://amazon-clone-with-stripe-payment.netlify.app/images/banner.jpg"
            />
            
            <div className='home__row'>
              {/* product 1 */}
              <Product 
                id="101"
                title="Apple iPhone 15 (128 GB) - Black [Locked] | Boost Infinite plan required starting at $60/mo. | Unlimited Wireless | No trade-in needed to start | Get the latest iPhone every year" 
                price={829.00} 
                img="https://m.media-amazon.com/images/I/612mSuve9bL._AC_SX679_.jpg" 
                rating={4} />
              
              <Product
                id="102"
                title="Kenwood kMix Stand Mixer for
                Baking, Stylish Kitchen Mixer with
                K-beater, Dough Hook and Whisk, 5 Litre
                Glass Bowl"
                price={239.0}
                rating={4}
                img="https://m.media-amazon.com/images/I/61FJtVQh9bL.jpg"
                />

            </div>
            
            <div className='home__row'>
              
              <Product
                id="201"
                title="Samsung LC49RG90SSUXEN 49' Curved
                LED Gaming Monitor"
                price={199.99}
                rating={3}
                img="https://m.media-amazon.com/images/I/818jj0DF-dL._AC_UY327_FMwebp_QL65_.jpg"
              />

              <Product
                id="202"
                title="Amazon Echo (5th generation) |
                Smart speaker with Alexa, Charcoal
                Fabric"
                price={123.45}
                rating={5}
                img="https://m.media-amazon.com/images/I/518cRYanpbL._AC_UY327_FMwebp_QL65_.jpg"
              />

              <Product
                id="203"
                title="Apple 2021 12.9-inch iPad Pro Wi‑Fi + Cellular 128GB - Silver"
                price={999.97}
                rating={5}
                img="https://m.media-amazon.com/images/I/81J5bpGahqS._AC_UY327_FMwebp_QL65_.jpg"
              />

            </div>

            <div className='home__row'>
              
              <Product
                id="301"
                title="ASUS ROG Ally 7-inch screen 120Hz Gaming Handheld - AMD Z1 Extreme Processor - 512GB - White"
                price={695.00}
                rating={5}
                img="https://m.media-amazon.com/images/I/61tkPH8LjZL._SX522_.jpg"
              />
              
              <Product
                id="302"
                title="Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 16GB Unified Memory, 1TB SSD Storage, 1080p FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Midnight"
                price={1699.00}
                rating={4}
                img="https://m.media-amazon.com/images/I/81EHBhjC-+L._AC_SX679_.jpg"
              />

            </div>

        </div>
      
    </div>
  )
}

export default Home
