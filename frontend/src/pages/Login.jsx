import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();

  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {

    const fetchData = async () => {
      const {data} = await axios.get("http://localhost:4000/getAll");
      console.log(data);
      };

      fetchData();

  });

  async function handleSubmit (e) {

    e.preventDefault();

    let dataToSend = {dni, password}

    if (dni === '' || password === '' ) {
      setMessage ('Please fill the required fields (Account and Password)')
      return; 
    }

    axios.post('http://localhost:4000/login', dataToSend)
    .then((res) => {
      console.log(res.data);
      if (res.data.length > 0) {
        setTimeout(()=>{navigate("/dashboard")},1000)
      } else {
        setMessage('User not exists, register please');
      }
    }, (err) => {
      console.log(err);
    });

  }

  return (
    <div className='login'>
    <h1 className='sign-in'>Sign in:</h1>
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-item'>
        <label className='label'> 
          Enter your DNI: 
        </label>
        <input
          type='text'
          id='dni'
          className='input'
          placeholder='Insert DNI'
          onChange={(e) => setDni(e.target.value)}
          value={dni}	
        />
      </div>
      <div className='form-item'>
        <label className='label'> 
          Insert your password: 
        </label>
        <input
          type='password'
          id='password'
          className='input'
          placeholder='Insert Password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}	
        />
      </div>
      <div className='form-item'>
        <Button variant="contained" color="success" type='submit'>
            Sign in
        </Button>
      </div>
      <span className='message'>
        {message}
      </span>
    </form>
  </div>
  )
}

export default Login