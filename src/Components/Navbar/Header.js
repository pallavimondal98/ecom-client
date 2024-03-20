import React, { useContext } from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Header = () => {
  const { getTotalCartItems } = useContext(ShopContext)
  return (
    <>
      {/* // <!----------------------1ST NAV------------------------> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          {/* <!-- <a className="navbar-brand" to="#"><img src="/imgs/bold.png" style="height: 3rem;">arlow</a> --> */}

          {/* <!--===========Brand name =============--> */}

          <div className="logo"><span className='b-logo'>B</span><span className="small-text">arlow</span></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input className="form-control-box " type="search" placeholder="Search" aria-label="Search" />
              <button className="btn-search" type="submit">
                Search
              </button>
            </form>

            {/* <!--==================Right side buttons ==========================--> */}
            <div className="right-btns">
              {/* <span className="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Register">
                <button className=" btn-register"><Link to="/register">Register</Link></button>
              </span> */}
              {localStorage.getItem('auth-token')
                ? <button className=" btn-login" onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>LOGOUT</button>
                : <span className="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Login">
                  <button className=" btn-login"><Link to="/signinup">SIGN IN</Link></button>
                </span>}

              <Link to="#"><i className="fa-solid fa-heart mr-2" style={{ color: "#ffffff", fontSize: "28px", marginRight: '2rem' }}></i></Link>

              <span><Link to="/cart"><i className="fa-solid fa-cart-shopping" style={{ color: "#ff4000", fontSize: "27px" }}> </i></Link>
                <span className='nav-cart-count'>{getTotalCartItems()}</span>
              </span>
            </div>
          </div>
        </div>
      </nav >

      {/* <!------------------2ND NAV-------------------------> */}

      <ul ul className="nav nav-tabs shadow" style={{ justifyContent: "center", background: "ghostwhite" }
      }>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link fs-6" to="/womens" role="button" aria-expanded="false">Women</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link fs-6" to="/mens" role="button" aria-expanded="false">Men</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/kids">Kids</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul >
    </>
  )
}

export default Header