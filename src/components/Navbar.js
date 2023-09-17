import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// basically props are working as the parameters it means we pass the parameters and give the value according to our need....
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* for react router we use this syntax for link */}
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          {/* <a className="navbar-brand" href="/">
            {props.title}
          </a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* for react router we use this syntax for link */}
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                {/* <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a> */}
              </li>
              <li className="nav-item">
                {/* for react router we use this syntax for link */}
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
                {/* <a className="nav-link" href="#">
                  {props.about}
                </a> */}
              </li>
            </ul>
 
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
            </div>

            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
  )
}

// it is used for declare the type of the props...
Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}

// it is used when we forget to give the props value then it will set the default value...
Navbar.defaultProps = {
    title: 'set title here',
    about: 'about text here'
}

// it is used to set the props value as required in type of string...
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     about: PropTypes.string.isRequired,
// }