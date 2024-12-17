import React from 'react'
import Box from '@mui/system/Box'
import Link from "@mui/material/Link";
import  Typography  from '@mui/material/Typography';
import '../component/Account/Signup.css'
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
export default function UserAdd() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    full_name: '',
    user_name: '',
    email: '',
    phone_number: '',
    date_of_birth: '',
    sex: '',
    password: '',
    rePassword: '',
    japanese_level: '',
    role: '',
    user_img: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
const [okMessage, setOkMessage]= useState('')
  // Hàm cập nhật dữ liệu trong form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.rePassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('https://animetangobackend.onrender.com/admin/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success) {
          console.log('Sign up successful:', data.message);
          setOkMessage(`Sign up successful: ${data.message}`);
          setTimeout(() => {
            navigate('/home');
          }, 2500);
        } else {
          const error__alert = `Sign up failed: ${data.message}`;
          console.log(error__alert);
          setErrorMessage(`Sign up failed: ${data.message}`);
        }
      } else {
        setErrorMessage(`Sign up failed: ${response.statusText}`);
        console.error('Error during sign up:', response.statusText);
      }
    } catch (error) {
      setErrorMessage(`Network error: ${error}`);
    }
  };


  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 2000); // 2 giây

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);
  useEffect(() => {
    if (okMessage) {
      const timerr = setTimeout(() => {
        setOkMessage('');
      }, 2000); // 2 giây

      return () => clearTimeout(timerr);
    }
  }, [okMessage]);
  return (
    <Box sx={{paddingLeft: '10vw'}}>
    <Box>
  {errorMessage && (
          <Alert variant='filled' severity="error" style={{transition: '-moz-initial', width: '78%', position: 'absolute', zIndex:'20', top: '60px', left: '22vw'}}>
            {errorMessage}
          </Alert>
        )}

      {okMessage && (
          <Alert variant='filled' severity="success" style={{transition: '-moz-initial', width: '78%', position: 'absolute', zIndex:'20', top: '60px', left: '22vw'}}>
            {okMessage}
          </Alert>
        )}
   <Box sx={{position: 'absolute', zIndex: '2', top: '0'}} className='form'>
   <Typography sx={{fontWeight:"800", color: "#0209d6" , fontSize: '30px',textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)", textAlign: 'center',marginTop: '75px'}}>Create an account</Typography>
   <form onSubmit={handleSubmit}>
        <div style={{display: 'flex', justifyContent: 'center', gap: '10vw', marginTop: '20px'}}>
         <div>
            <label>Fullname</label>
            <br></br>
            <input className="full_name"  name="full_name" onChange={handleChange} placeholder='Full name' type='text' style={{outline: 'none', borderRadius: '7px', border: '1px solid #e6e4e3', height: '35px', width: '24vw', fontSize: '17px', paddingLeft: '7px'}}></input>
         </div>
         <div>
            <label>Username</label>
            <br></br>
            <input className="user_name"  name="user_name" onChange={handleChange} placeholder='Username' type='text' style={{outline: 'none', borderRadius: '7px', border: '1px solid #e6e4e3', height: '35px', width: '24vw', fontSize: '17px', paddingLeft: '7px'}}></input>
         </div>

        </div>
        <div  style={{display: 'flex', justifyContent: 'center', gap: '10vw',marginTop: '30px'}}>
         <div>
            <label>Phone number</label>
            <br></br>
            <input name="phone_number" className="phone_number" onChange={handleChange} placeholder='Phone number' type='text' style={{outline: 'none', borderRadius: '7px', border: '1px solid #e6e4e3', height: '35px', width: '24vw', fontSize: '17px', paddingLeft: '7px'}}></input>
         </div>
         <div>
            <label>Email</label>
            <br></br>
            <input className="email"  name="email" placeholder='Email' onChange={handleChange} type='text' style={{outline: 'none', borderRadius: '7px', border: '1px solid #e6e4e3', height: '35px', width: '24vw', fontSize: '17px', paddingLeft: '7px'}}></input>
         </div>
          </div>
         <div style={{display: 'flex', justifyContent: 'center', gap: '10vw',marginTop: '30px'}}>
         <div>
            <label>Date of birth</label>
            <br></br>
            <input placeholder='Ngày sinh' type='date' className="birthday" onChange={handleChange}  name="date_of_birth" style={{outline: 'none', borderRadius: '7px', border: '1px solid #e6e4e3', height: '35px', width: '24vw', fontSize: '17px', paddingLeft: '7px'}}></input>
         </div>
         <div style={{width: '24vw'}}>
            <label>Gender</label>
            <br></br>
          <select className='sex' onChange={handleChange} name="sex" style={{outline: 'none', borderRadius: '7px', border: '1px solid #e6e4e3', height: '35px', width: '10vw', fontSize: '17px', paddingLeft: '7px'}}>
          <option value="" selected hidden></option>
          <option value="1" className='sex' onChange={handleChange} name="sex">Male</option>
          <option value="2" className='sex' onChange={handleChange} name="sex" >Female</option>
          </select>
         </div>

        </div>

        <div style={{display: 'flex', justifyContent: 'center', gap: '10vw',marginTop: '30px'}}>
         <div>
            <label>Password</label>
            <br></br>
            <input className="Password" onChange={handleChange}  name="password" placeholder='Password' type='password' style={{outline: 'none', borderRadius: '7px', border: '1px solid #e6e4e3', height: '35px', width: '24vw', fontSize: '17px', paddingLeft: '7px'}}></input>
         </div>
         <div>
            <label>Repassword</label>
            <br></br>
            <input className="rePassword" onChange={handleChange} name="rePassword" placeholder='Repassword' type='password' style={{outline: 'none', borderRadius: '7px', border: '1px solid #e6e4e3', height: '35px', width: '24vw', fontSize: '17px', paddingLeft: '7px'}}></input>
         </div>

        </div>
        <div style={{display: 'flex', justifyContent: 'center', gap: '10vw',marginTop: '30px', alignItems: 'end' }}>
         <div style={{width: '24vw'}}>
            <label>Level</label>
            <br></br>
            <select className="japanese_level" name="japanese_level" onChange={handleChange} style={{outline: 'none', borderRadius: '7px', border: '1px solid #e6e4e3', height: '35px', width: '10vw', fontSize: '17px', paddingLeft: '7px'}}>
          <option value="" selected hidden></option>
          <option value="N1">N1</option>
          <option value="N2">N2</option>
          <option value="N3">N3</option>
          <option value="N4">N4</option>
          <option value="N5">N5</option>
          </select>
         </div>
         <div>
            <label>Role</label>
            <br></br>
            <input name="role" className="role" onChange={handleChange} placeholder='Role' type='text' style={{outline: 'none', borderRadius: '7px', border: '1px solid #e6e4e3', height: '35px', width: '24vw', fontSize: '17px', paddingLeft: '7px'}}></input>
         </div>
        
         </div>

           <Button sx={{marginTop: '30px', position: 'absolute', right: '0px', color: 'white', backgroundColor: 'black', marginLeft: '5px', borderRadius: '10px', border: '2px solid #000'}} className='button' type="submit">Create</Button>


        
        </form>
   </Box>
    </Box>
    
    
    
    
    
    </Box>
  )
}
