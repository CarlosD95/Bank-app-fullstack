import React, { useEffect, useState } from 'react'
import { MdAccountBalance } from "react-icons/md";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiUserCircle, BiNotepad, BiDollarCircle } from "react-icons/bi";
import Axios from 'axios';
import Button from '@mui/material/Button';


const Dashboard = () => {

  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');
  
  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios({
          url: "http://localhost:4000/getall",
        });

        setList(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [setList]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
      <div className='dashboard'>
      <div className='banner-dashboard'>
      {list.map((item)=> (
        <div className='headline-dashboard' key={item.account}>
              <h1>Hello: {item.name}  </h1>
              <h3>Balance: {item.balance} $  </h3>
              <br />
              <Button onClick={handleShow} type='submit' color='secondary' variant='contained' size='large'>Deposit</Button>{" "}
              <Button type='submit' color='secondary' variant='contained' size='large'>Retire</Button>
          
        </div>
        ))}
        <div className='image'>
          <MdAccountBalance />
        </div>
        <div className='services' id='services'>
          <Link to='/'>
            <div className='item-dashboard'>
              <div className='image-item'>
                <BiUserCircle />
              </div>
              <div className='title'>
                <h3>Sign out</h3>
              </div>
            </div>
          </Link>
          <Link to='/make-transaction'>
            <div className='item-dashboard'>
              <div className='image-item'>
                <BiDollarCircle />
              </div>
              <div className='title'>
                <h3>Make Transaction</h3>
              </div>
            </div>
          </Link>
          <Link to='/transfers'>
            <div className='item-dashboard'>
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

export default Dashboard