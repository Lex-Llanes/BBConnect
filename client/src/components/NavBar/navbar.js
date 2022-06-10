import React from 'react';
import { Nav, NavLink, NavMenu } from "./NavBarElements.js";
import image from "./BBconnect.png"

const Navbar = () => {
  return (
    <div> 
      <> 
    <Nav className="nav">
    <ul className='main'>
        <NavMenu>   
        <div className="logo">
      <img className="logo" alt="bbconnectlogo"src={image} style={{height:"75px"}} />
        </div>
        <li>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          </li>
                <li>
                <NavLink to="/resources" activeStyle>
                  The Plug
                </NavLink>
                </li>
                <li>
                <NavLink to="/discussions" activeStyle>
                  The Tea
                </NavLink>
                </li>
        </NavMenu>
        </ul>
    </Nav>
    </>
    </div>
  )
}

export default Navbar;