import React from 'react'
import { MdAccountBalance } from "react-icons/md";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiUserCircle, BiNotepad, BiDollarCircle } from "react-icons/bi";
import '../App.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='banner'>
        <div className='headline'>
          <h1>Welcome to Serrano's Bank</h1>
          <p>The new wallet that will change the world</p>
        </div>
        <div className='image'>
          <MdAccountBalance />
        </div>
        <div className='services-banner'>
          <h1>Our Services</h1>
          <a className='button-services' href='#services'>
            <BsFillArrowDownCircleFill />
          </a>
        </div>
        <div className='services' id='services'>
          <Link to='/login'>
            <div className='item'>
              <div className='image-item'>
                <BiUserCircle />
              </div>
              <div className='title'>
                <h3>Sign in</h3>
              </div>
            </div>
          </Link>
          <Link to='/make-transaction'>
            <div className='item'>
              <div className='image-item'>
                <BiDollarCircle />
              </div>
              <div className='title'>
                <h3>Make Transaction</h3>
              </div>
            </div>
          </Link>
          <Link to='/transfers'>
            <div className='item'>
              <div className='image-item'>
                <BiNotepad />
              </div>
              <div className='title'>
                <h3>Transaction History</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home