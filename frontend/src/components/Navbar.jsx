

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoMdWallet } from "react-icons/io";



function Navbar () { 
  const ref = useRef();
  const size = useRef();

  const maxSize = () => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 731) {
        ref.current.style.display = "block";
      } else {
        ref.current.style.display = "none";
        size.current.style.height = "4.5rem";
      }
    })
  }

  useEffect(() => {
    maxSize()
    window.removeEventListener("resize", null)
  }, [])

  return (
    <nav className='nav-bar'>
      <Link to='/'>
        <div className='logo'>
          <span className='logo-ico' >
            <IoMdWallet /> 
          </span>
          <div className='logo-text'>
            <span>Serrano's</span>
            <span>Bank</span>
          </div>
        </div>
      </Link>
      <div className='nav-links' ref={ref}>
        <ul className='options-list'>
          <li>
            <Link to='/'>Home</Link>
            <span className='seperator'> | </span>
          </li>
          <li>
            <Link to='/create-user'>Create User</Link>
            <span className='seperator'> | </span>
          </li>
          <li>
            <Link to='/Transfers'>Transfers History</Link>
            <span className='seperator'> | </span>
          </li>
        </ul>
      </div>
    </nav>
  )

}



export default Navbar