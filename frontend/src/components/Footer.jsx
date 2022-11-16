import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdWallet } from "react-icons/io";
import { GoMarkGithub } from "react-icons/go";
import '../App.css';


function Footer () {
  return (
    <div className='footer'>
      <Link to='/'>
        <div className='logo'>
          <span className='logo-ico'>
            <IoMdWallet />
          </span>
          <div className='logo-text'>
            <span>Serrano's</span>
            <span>Bank</span>
          </div>
        </div>
      </Link>
      <div className='sign'>
        Made By{" "}
        <a 
          href="https://github.com/CarlosD95"
          target='blank'
          rel='noreferrer'
        >
        <span>
          <GoMarkGithub /> CarlosD95
        </span> 
        </a>
      </div>
      <div className='copyright'>
        &#169; Copyright 2022 
        <br />
        All rights reserved.
      </div>
    </div>
  )
}

export default Footer