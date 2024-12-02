import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../component/Header/Header'
import HomePicture from '../component/HomePicture/HomePicture'
import Footer from '../component/Footer/Footer'
import FilmCard from '../Film/FilmCard'
import NewFilm from '../Film/NewFilm'
import Favourite from '../Film/Favourite'
import { Box } from '@mui/material'
export default function Home() {
  const [formData, setFormData] = useState({
    JapaneseLevel: 'N5',
  });

  const fetchFilm = async () => {
    try {
      const response = await fetch('https://animetangobackend.onrender.com/api/anime/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Lỗi khi đăng nhập:', response.statusText);
      }
    } catch (error) {
      console.error('Lỗi mạng:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchFilm();
    };
    fetchData();
  }, []);
 
  return (
    <>
    <Header/>
    <HomePicture/>
    <NewFilm/>
    <Box sx ={{marginTop: '5%'}}> <Favourite/></Box>
  
 

    </>
  )
}
