import React, { useEffect, useState} from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'
import validator from 'validator'
import { useNavigate } from 'react-router-dom';



const CreateUser = () => {


  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");

   
  useEffect(() => {

    const fetchData = async () => {
      const {data} = await axios.get("http://localhost:4000/getAll");
      console.log(data);
      };
      fetchData();

    
  });

  function handleSubmit (e) {

    e.preventDefault();

    const dataToSend = {name, phone, email, dni, password}

    if (name === '' || email === '' || password === '' || phone === '' || dni === '' ) {
      setMessage ('Please fill the required fields (Name, Email, DNI, Phone and Password)')
      return; 
    }

    if (!validator.isEmail(email)) {
      setMessage("Please, enter valid Email");
      return;
    }

    if (!validator.isStrongPassword(password)) {
      setMessage("Please, Check if a password is strong or not");
      return;
    }

    if (password !== confirm) {
      setMessage('Passwords do not match');
      return;
    }

    axios.post("http://localhost:4000/add", dataToSend).then(()=>{
    setTimeout(()=>{navigate("/Login")},1000)}).catch(setMessage('DNI already exists'))

  }


  return (
    <div className='create-user'>
      <h1 className='sign-up'>Sign Up</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-item'>
          <label className='label'> 
            Enter your full name: 
          </label>
          <input
            type='text'
            id='name'
            className='input'
            placeholder='Insert full name'
            onChange={(e) => setName(e.target.value)}
            value={name}	
          />
        </div>
        <div className='form-item'>
          <label className='label'> 
            Enter your identification number document (DNI): 
          </label>
          <input
            type='number'
            id='dni'
            className='input'
            placeholder='Insert DNI'
            onChange={(e) => setDni(e.target.value)}
            value={dni}	
          />
        </div>
        <div className='form-item'>
          <label className='label'> 
            Enter your email address: 
          </label>
          <input
            type='email'
            id='email'
            className='input'
            placeholder='Insert email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}	
          />
        </div>
        <div className='form-item'>
          <label className='label'> 
            Enter your number phone:
          </label>
          <input
            type='text'
            id='phone'
            className='input'
            placeholder='Insert Phone Number'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}	
          />
        </div>
        <div className='form-item'>
          <label className='label'> 
            Enter Password: 
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
          <label className='label'> 
            Confirm Password: 
          </label>
          <input
            type='password'
            id='confirm'
            className='input'
            placeholder='Confirm Password'
            onChange={(e) => setConfirm(e.target.value)}
            value={confirm}	
          />
        </div>
        <div className='form-item'>
        <Button type='submit' variant="contained" color="success">
            Create Account
        </Button>
        </div>
        <span className='message'>
          {message}
        </span>
      </form>
    </div>
  )
}

export default CreateUser