import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='header'>

      <Link to="/">
        <img className="header__logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
        />
      </Link>

      
      <div className='header__search'>
            <input className='header__search__Input' type='text' />
            <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        
            <div className='header__option'>
                <span className='header__option_lineOne'>Hello</span>
                <span className='header__option_lineTwo'>Sign in</span>
            </div>

            

            <div className='header__option'>
                <span className='header__option_lineOne'>Returns</span>
                <span className='header__option_lineTwo'>& Orders</span>
            </div>

            <div className='header__option'>
                <span className='header__option_lineOne'>Your</span>
                <span className='header__option_lineTwo'>Prime</span>
                
            </div>

            <Link to="/checkout">
              <div className='header__optionBasket'>
                <ShoppingBasketIcon />
                <span className='header__option_lineTwo header__BasketCount'>{basket?.length}</span>
              </div>
            </Link>

            

      </div>
    </div>
  )
}

export default Header
