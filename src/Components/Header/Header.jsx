import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
function Header() {


  return (
    <div>
        <header className='headerDiv'>
           <Link to="/" className='headerLogo'>
            <div>
              Savvyapp Assessment   
            </div>
            </Link>
            <div className='header-option'>
             <button className='header-btn'>Login</button>
            </div>

          
        </header>
    </div>
  )
}

export default Header