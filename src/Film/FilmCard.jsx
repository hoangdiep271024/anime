import Box from '@mui/material/Box'
import React from 'react'
import { useTheme } from '@emotion/react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './FilmCard.css'

export default function FilmCard(props) {
    const theme = useTheme()
  return (
   <Box sx = {{width: '180px', height: 'auto', minHeight: '250px', borderRadius: '7px',cursor: 'pointer', overflow: 'hidden' }}>
    <div className='filmImagediv' style={{width: '100%', height: '75%', position: 'relative', zIndex: '1', alignItems: 'center', display: 'flex', justifyContent:'center',  overflow: 'hidden'}}> 
    <img className='filmImage' src = {props.link} style={{width: '100%', height: '100%', objectFit:'cover',  transition: 'transform 0.3s ease',}}>
    </img>
    <PlayCircleIcon className='icon' style={{position: 'absolute', zIndex: '3', color: 'black', fontSize: '55px',transition: 'opacity 0.3s ease'}}/>
    </div>
   
    <div style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{props.name}</div>
    <div style={{display: 'flex', justifyContent: 'center', gap: '30%'}}>
    <div>{props.duration}</div>
    <div>{`Trình độ: ${props.level}`}</div>
    </div>
    <div>{`Lượt xem: ${props.view}`}</div>
   </Box>
  )
}

