import React from 'react'
import logo_white from '../Assets/logo_white.png'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'

export default function Navbar() {

    const [email, setEmail] = useState('')

    useEffect(() => {
        if(sessionStorage.getItem('isLoggedIn') === null) {
            setEmail('')
        }
        else if(sessionStorage.getItem('isLoggedIn') === 'true') {
            setEmail(sessionStorage.getItem('email'))
        }
        else {
            setEmail('')
        }
    }, [email])

  return (
    <div className="navbar-main">
        <nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 logo-col">
                        <Link to="/"> <img id="logo" src={logo_white} alt="logo"/> </Link>
                    </div>
                    <div className="col-md-8 nav-links">
                        <ul>
                            <Link to="/"> <li> <a>HOME &nbsp; <span class="glyphicon glyphicon-home" aria-hidden="true"></span> </a></li> </Link>
                            <Link to="/about"> <li><a>ABOUT &nbsp; <span class="glyphicon glyphicon-education" aria-hidden="true"></span> </a></li> </Link>
                            <Link to="/cart"> <li><a>CART &nbsp; <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> </a></li> </Link>
                        </ul>
                    </div>
                    <div className="col-md-2 cart" style={{textAlign: "right"}}>
                        { email == '' ? 'Hi, there' : 'Hi, ' + email }
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
