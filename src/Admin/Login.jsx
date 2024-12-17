import React, { useState, useEffect } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Films from './Films';
import Dashboard from './Dashboard';
import Users from './Users';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import FilmOverView from './FilmOverView';
import FilmAdd from './FilmAdd'
import UserAdd from './UserAdd';
import FilmEpisode from './FilmEpisode'
import UserOverView from './UserOverView'
import FilmDetail from './FilmDetail';
import UserEdit from './UserEdit';
import FilmEdit from './FilmEdit';
import DeleteEpisode from './DeleteEpisode';
import AddEpisode from './AddEpisode';
// import Footer from '../component/Footer/Footer'

export default function Login() {
  const [isLogin, setIsLogin] = useState()
  const navigate = useNavigate();
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
    <>
      <Box sx={{ position: 'fixed', top: 0, width: '100%', height: '60px', zIndex: 1000}}>
        <Header />
      </Box>
      <Box sx={{ position: 'fixed', top: '60px', left: 0, width: '22vw', height: 'calc(100vh - 60px)', borderRight: '1px solid #ccc'}}>
        <Navbar />
      </Box>
      <Box sx={{ marginLeft: '22vw', marginTop: '60px' }}>
        <Routes>
        <Route path="/" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="users" element={<Users />} />
          <Route path="films" element={<Films />} />
          <Route path="filmOverview" element={<FilmOverView />} />
          <Route path="filmAdd" element={<FilmAdd />} />
          <Route path="filmEpisode" element={<FilmEpisode />} />
          <Route path="userOverview" element={<UserOverView/>} />
          <Route path="userAdd" element={<UserAdd/>} />
          <Route path="userEdit/:user_id" element={<UserEdit/>} />
          <Route path="filmoverview" element={<FilmOverView />} />
          <Route path="film/:filmName" element={<FilmDetail/>} />
          <Route path="filmEdit/:filmName" element={<FilmEdit/>} />
          <Route path="delete/episode" element={<DeleteEpisode/>} />
          <Route path="add/episode" element={<AddEpisode/>} />
        </Routes>
      </Box>
    </>
  );
}
