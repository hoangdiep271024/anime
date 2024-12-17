import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react';
import Textt from '../component/Textt'
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
export default function Dashboard() {
  const [isLogin, setIsLogin] = useState()
  const navigate = useNavigate();
  const [data, setData] =useState()
  useEffect(() => {
    fetch('https://animetangobackend.onrender.com/admin/userinfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({jwt : localStorage.getItem('jwt')})
    })
      .then(response => response.json())
      .then(responseData => {
        if(responseData.success){
          setData(responseData.userInfo)
          setIsLogin(true)

        }
        else{
          setIsLogin(false)
          navigate('/home'); 

        }
        
      })
      .catch(error => console.error('Error:', error));
  }, []);
  return (
    <Box sx= {{padding :'30px'}}>
      {!data && <Box sx={{marginTop: '100px', display: 'flex', justifyContent: 'center'}}><CircularProgress></CircularProgress></Box>}
      {data && <Box>
    <Textt fullText={'Welcome to the Admin Dashboard!'}></Textt>
   <div style={{fontSize: '25px'}}>{`Hello ${data.full_name}`}</div>
    <div style={{marginTop: '20px'}}>In here you can manage users, update content, and monitor system performance here. Wishing you a productive workday!</div></Box>}
    </Box>
  )
}
