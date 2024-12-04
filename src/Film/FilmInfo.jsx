import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box'
import { useTheme } from '@emotion/react';
import './FilmCard.css'
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArticleIcon from '@mui/icons-material/Article';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import { Button, Skeleton } from '@mui/material';
export default function FilmInfo() {
  const theme = useTheme();
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
      const fetchFilm = async () => {
        try {
          const response = await fetch('https://animetangobackend.onrender.com/api/anime/animeInfo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({anime_id : localStorage.getItem('film_id')}),
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
    {!loading && 
    <Box sx={{ marginLeft: '10%',width: '80%', height: 'auto', minHeight: '40vh', marginTop: '200px', backgroundColor: theme.palette.mode == 'dark' ? '#333332' : '#fafafa', borderRadius: '12px', display: 'flex', alignItems: 'center', paddingLeft: '7%', gap: '5%', fontSize: '18px'}}>
    <img className='infoImg' src = {data.anime['Image URL']} style={{ cursor: 'pointer', width: '16%', height: 'auto', maxHeight: '35vh', minHeight: '30vh'}}></img>
    <div>
      <div style = {{fontSize: '27px', fontWeight: '800', fontFamily: 'Sour Gummy'}}>{data.anime.Name}</div>
      <div style={{display: 'flex', gap: '4px'}}>
  Genres: {data?.anime?.Genres?.map((item, index) => (
    <Box sx ={{display: 'flex'}}>
    <Link key={index} style={{textDecoration: 'none', cursor: 'pointer'}}>
      {item}
    </Link>
     <div>{index < data.anime.Genres.length - 1 ? ', ' : ''}</div>
     </Box>
  ))}
</div>
<div style={{display: 'flex', alignContent: 'center', gap: '5px', fontSize: '18px'}}>
  <div>Score: </div>
<Rating name="customized-10" defaultValue={data.anime.Score} precision={0.25} max={10} readOnly/>
<div>{`( ${data.anime.Score} )` }</div>
<div>{`by ${data.anime['Scored By']} viewers`}</div>
</div>
<div style={{display: 'flex', gap: '10%'}}>
<div>{`Type: ${data.anime.Type}`}</div>
{data.anime.Type === 'TV' && <div>{`Episodes : ${data.anime.Episodes}`}</div>}
{data.anime.Type === 'TV' && <div>{`Duration : ${data.anime.Duration}`}</div>}
</div>
<div style={{display: 'flex', gap: '4%', marginTop: '10px'}}>
     <Box sx ={{alignItems: 'center', display: 'flex', gap: '3px', borderRadius: '5px', backgroundColor: theme.palette.mode === 'light' ? 'black': 'white', color: theme.palette.mode === 'dark' ? 'black': 'white', paddingX:'7px', paddingY: '3px', cursor: 'pointer'}}><FavoriteIcon/>Like</Box>
     <Box sx ={{alignItems: 'center', display: 'flex', gap: '3px', borderRadius: '5px', backgroundColor: theme.palette.mode === 'light' ? 'black': 'white', color: theme.palette.mode === 'dark' ? 'black': 'white', paddingX:'7px', paddingY: '3px', cursor: 'pointer'}}>Evaluate</Box>
</div>
<div style={{display: 'flex', justifyContent: 'space-between', width: '50vw', marginTop: '20px'}}>
  <Box>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}><RemoveRedEyeIcon/> Views</div>
    <div style={{textAlign: 'center'}}>{data.anime.Members}</div>
  </Box>
  <Box>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}><FavoriteIcon/> Favorites</div>
    <div style={{textAlign: 'center'}}>{data.anime.Favorites}</div>
  </Box>
  <Box>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}><ArticleIcon/> Level</div>
    <div style={{textAlign: 'center'}}>{data.anime.JapaneseLevel}</div>
  </Box>
  <Box>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center'}}><NoAccountsIcon/>Age</div>
    <div style={{textAlign: 'center'}}>{data.anime.Old}</div>
  </Box>
</div>
    </div>
    </Box>}

    {loading && <Box sx ={{marginTop: '200px', marginLeft: '10%', width: '80vw', height: '40vh', borderRadius: '10px', overflow: 'hidden'}}><Skeleton variant='rectangular' width = '100%' height='100%'></Skeleton></Box>}
    </>
  )
}
