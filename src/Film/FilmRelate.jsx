import { Box } from '@mui/material';
import React, { useState } from 'react'
import { useEffect } from 'react';
export default function FilmRelate() {
  const [data , setData] = useState(null)
  const [loading, setLoading] = useState(true)
    const fetchFilm = async () => {
        try {
          const response = await fetch('https://animetangorecommendknn.onrender.com/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({anime_id : localStorage.getItem('film_id'), n: 12}),
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log(data)
            setData(data)
            setLoading(false)
    
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
    {!loading && <Box>
      
      
      </Box>}
    </>
  )
}
